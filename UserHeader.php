<!DOCTYPE html>
<html class="UserPage orange-yellow-theme">
<head>
        <!-- js libraries:  -->
    <script type="text/javascript" src="libs/js/jquery-2.2.0.min.js"></script>
    <script type="text/javascript" src="libs/js/jquery.cookie.js"></script>

    <!--   js classes  -->
    <script type="text/javascript" src="resources/js/OriginPage/RedirectManager.js"></script>
    <script type="text/javascript" src="resources/js/OriginPage/UiLogicInterface.js"></script>

    <!-- css libraries   -->
    <link href="libs/css/bootstrap.min.css" rel="stylesheet" type="text/css" />

    <!-- css styles    -->
    <link href="resources/css/UserPage/footer.css" rel="stylesheet" type="text/css" />
    <link href="resources/css/UserPage/header.css" rel="stylesheet" type="text/css" />
    <link href="resources/css/UserPage/UserPage.css" rel="stylesheet" type="text/css" />
    <link href="resources/css/OriginPage/announceMessageDiv.css" rel="stylesheet" type="text/css" />
    <link href="resources/css/OriginPage/font.css" rel="stylesheet" type="text/css" />
    

    <link href="resources/css/themes/orange-yellow-theme.css" rel="stylesheet" type="text/css" />

</head>
<header class="primary-color container-fluid">
        <div class="row">
            <div class="col-md-1 exit-col">
                <button class="exit-button">
                    خروج
                </button>
            </div>
            <div class="col-md-1 username-col">
                <span>
                    معلم / دانش آموز
                </span>
            </div>
            <div class="col-md-1 userType-col">
                
                <span>
                    مهدی اصلاحی ثانی
                </span>
            </div>

            <div class="col-md-5"></div>
            <div class="col-md-4 project-name-div">
                <h3>
                    مدرسه آنلاین
                </h3>
            </div>
    
        </div>
    
	<div class="announce-message-div">
		<h3 class="announce-message-text secondary-text"> Announce Message Here! </h3>
	</div>
</header>
<script type="text/javascript">
    $(document).ready(function(){
        //exit button listener
        $('.exit-col .exit-button').on('click',function(){
            //request for exit using ExitAgent 
            var exRe = new RedirectManager();
            exRe.redirectTo('MainPage');
        });
    });
</script>