<template>
    <div>
        <header><div id="favicon"><img id="favIcon" src="../assets/favicon.png" alt="Image"></div><div><h1 id="heading">Weather-Api</h1></div></header>
    </div>
</template>
<script>
export default{
    
}
</script>
<style scoped>
header{
    display: flex;
    /* align-item: center; */
    justify-content: space-between;
    background-color: rgb(51, 48, 48);
}
#favIcon{
    width: 40px;
    height: 40px;
    margin-left: 20px;
}
#favicon{
    padding-top: 10px;
    padding-bottom: 10px;
}
#heading{
    top: 0;
    margin-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
}
</style>