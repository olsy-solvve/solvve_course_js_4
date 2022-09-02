<template>
  <div class="photo-uploader">
    <div
      class="photo-uploader__wrapper"
      :class="{ 'photo-uploader__wrapper--drag': isDragStarted }"
    >
      <input
        ref="input"
        class="photo-uploader__input"
        type="file"
        multiple
        accept="image/*, .png, .jpg, .gif, .web"
        title=""
        @change="uploadFile"
        @dragenter="isDragStarted = true"
        @dragleave="isDragStarted = false"
      />
      {{ isDragStarted ? "" : uploadText }}
      <img
        class="photo-uploader__icon"
        v-show="isDragStarted"
        src="@/assets/img/upload.svg"
        alt="Upload photo"
      />
    </div>
    <div class="photo-uploader__photos">
      <div
        class="photo-uploader__photo"
        v-for="(photo, index) in modelValue"
        :key="index"
      >
        <button
          class="photo-uploader__remove"
          @click.prevent="removePhoto(index)"
        >
          &#10006;
        </button>
        <img :src="getSrc(photo)" :alt="`Photo ${index + 1}`" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";

export default {
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    const input = ref(null);
    const isDragStarted = ref(false);

    const uploadFile = ({ currentTarget }) => {
      if (currentTarget.files) {
        emit("update:modelValue", [
          ...modelValue.value,
          ...currentTarget.files,
        ]);
      }

      if (input.value) {
        input.value.value = "";
      }

      isDragStarted.value = false;
    };

    const removePhoto = (index) => {
      console.log(index);
      emit(
        "update:modelValue",
        modelValue.value.filter((p, i) => i !== index)
      );
    };

    const getSrc = (photo) => URL.createObjectURL(photo);

    const canToUpload = computed(() => 3 - modelValue.value.length);

    const uploadText = computed(() => {
      if (canToUpload.value > 0) {
        return `You can upload ${canToUpload.value} more ${
          canToUpload.value === 1 ? "photo" : "photos"
        } `;
      }

      if (canToUpload.value === 0) {
        return "You've uploaded all photos";
      }

      return "You uploaded too many photos";
    });

    return {
      input,
      isDragStarted,
      canToUpload,
      uploadText,
      uploadFile,
      removePhoto,
      getSrc,
    };
  },
};
</script>

<style lang="scss" scoped>
.photo-uploader {
  margin-top: 5px;
  width: 100%;

  &__wrapper {
    position: relative;
    text-align: center;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dotted rgb(172, 168, 168);
    border-radius: 10px;
    color: rgba(#000, 0.5);

    &--drag {
      color: rgba(#fff, 0.5);
      border-color: #000;
    }
  }

  &__input {
    cursor: pointer;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0;
  }

  &__photos {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    justify-content: space-between;
  }

  &__photo {
    position: relative;
    width: 198px;

    img {
      width: inherit;
      border-radius: 10px;
    }
  }

  &__remove {
    cursor: pointer;
    position: absolute;
    outline: none;
    top: 0;
    z-index: 1;
    left: calc(100% - 30px);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(#000, 0.05);
    border: 1px solid #000;
  }

  &__icon {
    opacity: 0.3;
    width: 50px;
  }
}
</style>
