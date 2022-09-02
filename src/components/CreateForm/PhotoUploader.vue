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

    //this file upload function
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

    //this function removes the uploaded file by its index
    const removePhoto = (index) => {
      emit(
        "update:modelValue",
        modelValue.value.filter((p, i) => i !== index)
      );
    };

    //this function creates from the uploaded file the url of the image to be displayed on the front
    const getSrc = (photo) => URL.createObjectURL(photo);

    //this property keeps track of the number of files uploaded
    const canToUpload = computed(() => 3 - modelValue.value.length);

    //this function returns the text to be displayed in the uploader depending on the number of uploaded files
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
  margin-top: 0.25rem;
  width: 100%;

  &__wrapper {
    position: relative;
    text-align: center;
    height: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.125rem dotted rgb(172, 168, 168);
    border-radius: 0.625rem;
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
    margin: 1rem 0;
    justify-content: space-between;
  }

  &__photo {
    position: relative;
    width: 12rem;

    img {
      width: inherit;
      border-radius: 0.625rem;
    }
  }

  &__remove {
    cursor: pointer;
    position: absolute;
    outline: none;
    top: 0;
    z-index: 1;
    left: calc(100% - 2rem);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: rgba(#000, 0.05);
    border: 0.0625rem solid #000;
  }

  &__icon {
    opacity: 0.3;
    width: 3rem;
  }
}
</style>
