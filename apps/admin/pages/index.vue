<!-- Add NewButton from @vinami/ui -->

<template>
    <div>
        <h1>Index</h1>
        <NewButton label="Large Button" @click="handleClick" size="large" />
        <p>This is the index page</p>
    </div>
</template>

<script setup>
import { NewButton } from "@vinami/ui";

const handleClick = () => {
    console.log("Clicked");
};
</script>
