<!-- Add NewButton from @vinami/ui -->

<template>
    <div>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
        <Button label="Large Button" @click="handleClick" size="large" />
    </div>
</template>

<script setup>
import { Button } from "@vinami/ui";

const handleClick = () => {
    console.log("Clicked");
};
</script>
