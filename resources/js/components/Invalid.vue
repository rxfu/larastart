<template>
    <div class="invalid-feedback" role="alert">
        <strong>{{ message }}</strong>
    </div>
</template>

<script>
export default {
    name: 'Invalid',

    props: [ 'message' ]
}
</script>
