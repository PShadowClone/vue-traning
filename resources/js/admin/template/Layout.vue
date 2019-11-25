<template>
    <div id="app">
        <!-- Preloader -->
        <div id="preloader">
            <div id="status"><i class="fa fa-spinner fa-spin"></i></div>
        </div>
        <section>
            <!-- START SIDE BAR-->
            <side-bar></side-bar>
            <!-- END SIDE BAR-->
            <div class="mainpanel">
                <!--  START TEMPLATE HEADER-->
                <v-header></v-header>
                <!--  END TEMPLATE HEADER-->
                <div class="pageheader">
                    <!--  START BREADCRUMB -->
                    <breadCrumb></breadCrumb>
                    <!--  END BREADCRUMB -->
                </div>
                <div class="contentpanel">
                    <!-- START ROUTE VIEW-->
                    <router-view></router-view>
                    <!-- END ROUTE VIEW-->
                </div>
            </div>
            <!-- mainpanel -->
            <!-- START CHAT USER-->
            <chat-user></chat-user>
            <!-- START CHAT USER-->
        </section>

    </div>
</template>

<script>
    import templateComponent from './components'

    export default {
        components: templateComponent
    }
</script>
<style lang="css">
    @import "../assets/css/style.default.css";
</style>