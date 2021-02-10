<template>
    <div class="container-fluid">

        <Menu></Menu>
        <div class="row">
            <div class="col-md-12">
                <h1>Správa dokumentů</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <!-- TODO novy zaznam -->
                <create></create>
            </div>

            <div class="col-md-9 tasks">
                <!-- TODO zaznamy -->
                <list></list>
                <hr/>
                <!-- TODO statistika -->
                <stats></stats>
            </div>

        </div>
    </div>
</template>

<script>
    import Create from './Create';
    import List from './List';
    import Stats from './Stats';
    import Menu from "./Menu";

    export default {
        components: {
            'create': Create,
            'list': List,
            'stats': Stats,
             'Menu' : Menu
        }
    }
</script>

<style>

    .selected {
        font-weight: bold;
    }
    .btn2 {
        background-color: DodgerBlue;
        border: none;
        color: white;
        padding: 12px 16px;
        font-size: 16px;
        cursor: pointer;
    }

    /* Darker background on mouse-over */
    .btn2:hover {
        background-color: RoyalBlue;
    }
</style>