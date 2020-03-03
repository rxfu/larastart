<template>
    <div class="invalid-feedback" role="alert">
        <strong>{{ value }}</strong>
    </div>
</template>

<script>
export default {
    name: 'Validation',

    props: [ 'error' ],

    data: function() {
        return {
            value: error.value
        }
    }
}
</script>
