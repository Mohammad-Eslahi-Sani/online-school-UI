<!DOCTYPE html>
<html class="GuestPage orange-yellow-theme">
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
    <link href="resources/css/GuestPage/footer.css" rel="stylesheet" type="text/css" />
    <link href="resources/css/GuestPage/header.css" rel="stylesheet" type="text/css" />
    <link href="resources/css/GuestPage/GuestPage.css" rel="stylesheet" type="text/css" />
    <link href="resources/css/OriginPage/announceMessageDiv.css" rel="stylesheet" type="text/css" />
    <link href="resources/css/OriginPage/font.css" rel="stylesheet" type="text/css" />
    

    <link href="resources/css/themes/orange-yellow-theme.css" rel="stylesheet" type="text/css" />

</head>
<header class="primary-color container-fluid">
        <div class="row">
            <div class="col-md-1 register-button-div">
                <button class="signup-button">
                    ثبت نام
                </button>    
            </div>
            <div class="col-md-1 login-button-div">
                <button class="login-button">
                    ورود
                </button>
            </div>

            <div class="col-md-6"></div>
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
        
        $('.login-button-div .login-button').on('click',function(){
            var redirectObj = new RedirectManager();
            redirectObj.redirectTo('Login');
        });

        $('.register-button-div .signup-button').on('click',function(){
            var redirectObj = new RedirectManager();
            redirectObj.redirectTo('Signup');
        });
    });
</script>
