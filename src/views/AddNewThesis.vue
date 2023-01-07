<template>
        <div class="addnewthesis">
            <div class="thesis">New Thesis</div>
            <div class="title">Tilte</div>
            <input class=" ti" type="text" value="">
            <div class="title">Department</div>
            <input class=" ti" type="text" value="">
            <div class="title">ID</div>
            <input class=" ti" type="number" value="">
            <div class="title">Year</div>
            <input class=" ti" type="number" value="">
            <div class="title">Choose file</div>
            <input class=" ti" type="file" value="">
            <div class="submit">
                <button @click="sub()">Add New Thesis</button>
            </div> 
        </div>
</template>
<script>
export default {
    name: "Thesis",
    data(){
        
    },
    methods: {
        sub(){
            alert("New thesis successfully added");
        }
    }
        
}
</script>

<style>
.thesis{
    padding-top:5%;
    text-align: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 70px;
    line-height: 50px;
    letter-spacing: -0.04em;
    color: #006D77;
}
.title{
    margin-top: 10px;
    margin-left: 30%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 50px;
    letter-spacing: -0.04em;
    color: #006D77;
}
.ti{
    margin-left: 30%;
    box-sizing: border-box;
    width: 603px;
    height: 50px;
    background: #EAF5DC;
    border: 2px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-size: 25px;
}
.submit{
    margin-top: 20px;
    display: flex;
    margin-left: 30%;
    border: 2px solid #000000;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    background-color:#46E343; 
}
</style>