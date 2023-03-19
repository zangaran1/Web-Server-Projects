<script setup lang="ts">

</script>

<template>
    <div class="section" id="signup-section">
        <form class="card">
            <div class="card-top">
                <h1>Sign Up</h1>
                <hr id="line">
            </div>
            <div class="field" id="field-1">
                <label class="label" id="usr-field">Username</label>
                <div class="control">
                <input class="input" type="text" placeholder="Enter Username" id="input-1">
                </div>
            </div>
            <div class="field">
                <label class="label" id="pw-field">Password</label>
                <div class="control">
                <input class="input" type="password" placeholder="Password" id="input-2">
                </div>
            </div>
            <div class="field">
                <label class="checkbox">
                    <input type="checkbox">
                    I agree to the terms and conditions
                </label>
            </div>
            <button class="button is-info" id="signup-button">Sign Up</button>
        </form>
    </div>
</template>


<style scoped>
#signup-section{
    display: flex;
    justify-content: center;
    align-items: center;
}
.card{
    margin: 10%;
    padding: 30px;
    width: 40%;
    background-color: rgb(44, 44, 44);
    
}
.card-top{
    text-align: center;
    color: white;
    font-size: 20px;
}
.card-top #line{
    padding: 2px;
    background-color: hsl(348, 100%, 61%);
}
#usr-field, #pw-field{
    padding: 10px;
    font-size: 20px;
    color: white;
}
#input-1, #input-2{
    background-color: rgb(70, 68, 68);
    border-radius: 20px;
    color: white;
    border-color: hsl(348, 100%, 61%);
}
::placeholder{
    color: white;
}
#signup-button{
    margin-top: 15px;
}
.checkbox{
    color: hsl(348, 100%, 61%);
}

</style>