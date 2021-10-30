<template>
    <div :class="divClass">
      <label class="mb-2 uppercase font-bold text-lg text-gray-900" :for="name">{{ label }}</label>
      <input class="border py-2 px-3 text-gray-900 rounded" :type="type" :name="name" :id="name" />
    </div>
</template>

<script>
  export default {
    props: {
        name: {
            required: true,
            type: String
        },
        type: {
          required: false,
          default: 'text',
          type: String
        },
        label: {
          required: true,
          type: String
        },
        mdFull: {
          required: false,
          default: false,
          type: Boolean
        }
    },
    setup(props) {

      let divClass = `flex flex-col mb-4 `;
      divClass += !props.mdFull ? 'md:w-5/12 md:mr-2' : 'md:w-full';

      return {
        divClass
      };

    }
  }
</script>
