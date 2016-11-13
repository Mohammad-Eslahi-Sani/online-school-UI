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
</script>    <link href="resources/css/StudentMainPage/StudentMainPageBody.css" rel="stylesheet" type="text/css" />
    <link href="resources/css/StudentMainPage/courseDiv.css" rel="stylesheet" type="text/css" />

<body class="light-primary-color">
	<div class="container-fluid StudentMainPageBody">
		<div class="row title-row">
			<div class="col-md-4 search-column">
				<span>
				جستجو در بین تمام درس ها:
				</span>
				<input type="text">
				<button>برو</button>
			</div>

			<div class="col-md-3 main-title-column">
				<h4>
					درس های جدید		
				</h4>
			</div>

			<div class="col-md-2">
			
			</div>
		</div>
		
		<div class="container course-table-div">
			<div class="row courses-row">
				
				<div class="col-md-3 course-div dark-secondary-color">
					<span class="row course-name">
						آموزش زبان انگلیسی
					</span>
					<span class="row course-teacher-name">
						محمد اصلاحی
					</span>
				</div>
				<div class="col-md-3 course-div dark-secondary-color">
					<span class="row course-name">
						آموزش جاوا
					</span>
					<span class="row course-teacher-name">
						محسن علومی
					</span>
				</div>
				<div class="col-md-3 course-div dark-secondary-color">
					<span class="row course-name">
						آموزش اندروید
					</span>
					<span class="row course-teacher-name">
						کیارش شمسی
					</span>
				</div>
				<div class="col-md-3 course-div dark-secondary-color">
					<span class="row course-name">
						مدیریت منابع انسانی
					</span>
					<span class="row course-teacher-name">
						محمد حسین حاجی وندی
					</span>
				</div>

			</div>	<!-- first row of courses -->
			<div class="row">
				
				<div class="col-md-3 course-div dark-secondary-color">
					<span class="row course-name">
						ساخت و تولید
					</span>
					<span class="row course-teacher-name">
						مصطفی
					</span>
				</div>
				<div class="col-md-3 course-div dark-secondary-color">
					<span class="row course-name">
						شبکه
					</span>
					<span class="row course-teacher-name">
						دکتر آنالویی
					</span>
				</div>
				<div class="col-md-3 course-div dark-secondary-color">
					<span class="row course-name">
						آموزش شیمی دبیرستان
					</span>
					<span class="row course-teacher-name">
						جعفر
					</span>
				</div>
				<div class="col-md-3 course-div dark-secondary-color">
					<span class="row course-name">
						فیزیک پیش دانشگاهی
					</span>
					<span class="row course-teacher-name">
						تقی
					</span>
				</div>
				
			</div>	<!-- second row of courses -->
		</div>
	</div>

</body>

<footer class="primary-color">
	<div class="contact-div">
		<h3 class="contact-div-text secondary-text"> 
		نسخه آزمایشی
		</h3>
	</div>
</footer>
</html>
