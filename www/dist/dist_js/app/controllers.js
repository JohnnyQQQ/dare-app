angular.module('your_app_name.controllers', [])

// APP
.controller('AppCtrl', ['$scope', function($scope) {

}])
// WALKTHROUGH
.controller('WalkthroughCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.goToLogIn = function(){
		$state.go('login');
	};

	$scope.goToSignUp = function(){
		$state.go('signup');
	};
}])

.controller('LoginCtrl', ['$scope', '$state', '$templateCache', '$q', '$rootScope', function($scope, $state, $templateCache, $q, $rootScope) {
	$scope.goToSignUp = function(){
		$state.go('signup');
	};

	$scope.goToForgotPassword = function(){
		$state.go('forgot-password');
	};

	$scope.doLogIn = function(){
		$state.go('app.feeds-categories');
	};

	$scope.user = {};

	$scope.user.email = "john@doe.com";
	$scope.user.pin = "12345";

	// We need this for the form validation
	$scope.selected_tab = "";

	$scope.$on('my-tabs-changed', function (event, data) {
		$scope.selected_tab = data.title;
	});

}])

.controller('SignupCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.user = {};

	$scope.user.email = "john@doe.com";

	$scope.doSignUp = function(){
		$state.go('app.feeds-categories');
	};

	$scope.goToLogIn = function(){
		$state.go('login');
	};
}])

.controller('ForgotPasswordCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.recoverPassword = function(){
		$state.go('app.feeds-categories');
	};

	$scope.goToLogIn = function(){
		$state.go('login');
	};

	$scope.goToSignUp = function(){
		$state.go('signup');
	};

	$scope.user = {};
}])

// MISCELLANEOUS
.controller('MiscellaneousCtrl', ['$scope', function($scope) {

}])

.controller('RateApp', ['$scope', function($scope) {
	$scope.rateApp = function(){
		if(ionic.Platform.isIOS()){
			//you need to set your own ios app id
			AppRate.preferences.storeAppURL.ios = '1234555553>';
			AppRate.promptForRating(true);
		}else if(ionic.Platform.isAndroid()){
			//you need to set your own android app id
			AppRate.preferences.storeAppURL.android = 'market://details?id=ionFB';
			AppRate.promptForRating(true);
		}
	};
}])

.controller('SendMailCtrl', ['$scope', function($scope) {
	$scope.sendMail = function(){
		cordova.plugins.email.isAvailable(
			function (isAvailable) {
				// alert('Service is not available') unless isAvailable;
				cordova.plugins.email.open({
					to:      'envato@startapplabs.com',
					cc:      'hello@startapplabs.com',
					// bcc:     ['john@doe.com', 'jane@doe.com'],
					subject: 'Greetings',
					body:    'How are you? Nice greetings from IonFullApp'
				});
			}
		);
	};
}])

.controller('MapsCtrl', ['$scope', '$ionicLoading', function($scope, $ionicLoading) {

	$scope.info_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.center_position = {
		lat: 43.07493,
		lng: -89.381388
	};

	$scope.my_location = "";

	$scope.$on('mapInitialized', function(event, map) {
		$scope.map = map;
	});

	$scope.centerOnMe= function(){
		$scope.positions = [];

		$ionicLoading.show({
			template: 'Loading...'
		});

		// with this function you can get the user’s current position
		// we use this plugin: https://github.com/apache/cordova-plugin-geolocation/
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			$scope.current_position = {lat: pos.k,lng: pos.D};
			$scope.my_location = pos.k+", "+pos.D;
			$scope.map.setCenter(pos);
			$ionicLoading.hide();
		});
	};
}])

.controller('AdsCtrl', ['$scope', '$ionicActionSheet', 'AdMob', 'iAd', function($scope, $ionicActionSheet, AdMob, iAd) {

	$scope.manageAdMob = function() {

		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			//Here you can add some more buttons
			buttons: [
				{ text: 'Show Banner' },
				{ text: 'Show Interstitial' }
			],
			destructiveText: 'Remove Ads',
			titleText: 'Choose the ad to show',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			destructiveButtonClicked: function() {
				console.log("removing ads");
				AdMob.removeAds();
				return true;
			},
			buttonClicked: function(index, button) {
				if(button.text == 'Show Banner')
				{
					console.log("show banner");
					AdMob.showBanner();
				}

				if(button.text == 'Show Interstitial')
				{
					console.log("show interstitial");
					AdMob.showInterstitial();
				}

				return true;
			}
		});
	};

	$scope.manageiAd = function() {

		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			//Here you can add some more buttons
			buttons: [
			{ text: 'Show iAd Banner' },
			{ text: 'Show iAd Interstitial' }
			],
			destructiveText: 'Remove Ads',
			titleText: 'Choose the ad to show - Interstitial only works in iPad',
			cancelText: 'Cancel',
			cancel: function() {
				// add cancel code..
			},
			destructiveButtonClicked: function() {
				console.log("removing ads");
				iAd.removeAds();
				return true;
			},
			buttonClicked: function(index, button) {
				if(button.text == 'Show iAd Banner')
				{
					console.log("show iAd banner");
					iAd.showBanner();
				}
				if(button.text == 'Show iAd Interstitial')
				{
					console.log("show iAd interstitial");
					iAd.showInterstitial();
				}
				return true;
			}
		});
	};
}])

.controller('InAppBrowserCtrl', ['$scope', function($scope) {
	$scope.openBrowser = function(){
		window.open('http://www.google.com', '_blank', 'location=yes');
	};
}])

// FEED
//brings all feed categories
.controller('FeedsCategoriesCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.feeds_categories = [];

	$http.get('feeds-categories.json').success(function(response) {
		$scope.feeds_categories = response;
	});
}])

//bring specific category providers
.controller('CategoryFeedsCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
	$scope.category_sources = [];

	$scope.categoryId = $stateParams.categoryId;

	$http.get('feeds-categories.json').success(function(response) {
		var category = _.find(response, {id: $scope.categoryId});
		$scope.categoryTitle = category.title;
		$scope.category_sources = category.feed_sources;
	});
}])

//this method brings posts for a source provider
.controller('FeedEntriesCtrl', ['$scope', '$stateParams', '$http', 'FeedList', '$q', '$ionicLoading', 'BookMarkService', function($scope, $stateParams, $http, FeedList, $q, $ionicLoading, BookMarkService) {
	$scope.feed = [];

	var categoryId = $stateParams.categoryId,
			sourceId = $stateParams.sourceId;

	$scope.doRefresh = function() {

		$http.get('feeds-categories.json').success(function(response) {

			$ionicLoading.show({
				template: 'Loading entries...'
			});

			var category = _.find(response, {id: categoryId }),
					source = _.find(category.feed_sources, {id: sourceId });

			$scope.sourceTitle = source.title;

			FeedList.get(source.url)
			.then(function (result) {
				$scope.feed = result.feed;
				$ionicLoading.hide();
				$scope.$broadcast('scroll.refreshComplete');
			}, function (reason) {
				$ionicLoading.hide();
				$scope.$broadcast('scroll.refreshComplete');
			});
		});
	};

	$scope.doRefresh();

	$scope.readMore = function(link){
		window.open(link, '_blank', 'location=yes');
	};

	$scope.bookmarkPost = function(post){
		$ionicLoading.show({ template: 'Post Saved!', noBackdrop: true, duration: 1000 });
		BookMarkService.bookmarkFeedPost(post);
	};
}])


// Multimedia
.controller('MultimediaCtrl', ['$scope', function($scope) {

}])


// FORMS
.controller('FormsCtrl', ['$scope', function($scope) {

}])

// PROFILE
.controller('ProfileCtrl', ['$scope', function($scope) {

}])

// AUdio Page
.controller('audiopage', ['$scope', function($scope) {

}])

// Motivation
.controller('motivation', ['$scope', function($scope) {

}])

// Dare Pesponse
.controller('dareresponse', ['$scope', function($scope) {

}])

// Succes
.controller('success', ['$scope', function($scope) {

}])

// Deep release
.controller('deeprelease', ['$scope', function($scope) {

}])



// BOOKMARKS
.controller('BookMarksCtrl', ['$scope', '$rootScope', 'BookMarkService', '$state', function($scope, $rootScope, BookMarkService, $state) {

	$scope.bookmarks = BookMarkService.getBookmarks();

	// When a new post is bookmarked, we should update bookmarks list
	$rootScope.$on("new-bookmark", function(event){
		$scope.bookmarks = BookMarkService.getBookmarks();
	});

	$scope.goToFeedPost = function(link){
		window.open(link, '_blank', 'location=yes');
	};
	$scope.goToWordpressPost = function(postId){
		$state.go('app.post', {postId: postId});
	};
}])

// SLIDER
.controller('SliderCtrl', ['$scope', '$http', '$ionicSlideBoxDelegate', function($scope, $http, $ionicSlideBoxDelegate) {

}])

// WORDPRESS
.controller('WordpressCtrl', ['$scope', '$http', '$ionicLoading', 'PostService', 'BookMarkService', function($scope, $http, $ionicLoading, PostService, BookMarkService) {
	$scope.posts = [];
	$scope.page = 1;
	$scope.totalPages = 1;

	$scope.doRefresh = function() {
		$ionicLoading.show({
			template: 'Loading posts now...'
		});

		//Always bring me the latest posts => page=1
		PostService.getRecentPosts(1)
		.then(function(data){

			$scope.totalPages = data.pages;
			$scope.posts = PostService.shortenPosts(data.posts);

			$ionicLoading.hide();
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

	$scope.loadMoreData = function(){
		$scope.page += 1;

		PostService.getRecentPosts($scope.page)
		.then(function(data){
			//We will update this value in every request because new posts can be created
			$scope.totalPages = data.pages;
			var new_posts = PostService.shortenPosts(data.posts);
			$scope.posts = $scope.posts.concat(new_posts);

			$scope.$broadcast('scroll.infiniteScrollComplete');
		});
	};

	$scope.moreDataCanBeLoaded = function(){
		return $scope.totalPages > $scope.page;
	};

	$scope.bookmarkPost = function(post){
		$ionicLoading.show({ template: 'Post Saved!', noBackdrop: true, duration: 1000 });
		BookMarkService.bookmarkWordpressPost(post);
	};

	$scope.doRefresh();
}])

// WORDPRESS POST
.controller('WordpressPostCtrl', ['$scope', '$http', '$stateParams', 'PostService', '$ionicLoading', function($scope, $http, $stateParams, PostService, $ionicLoading) {

	$ionicLoading.show({
		template: 'Loading post...'
	});

	var postId = $stateParams.postId;
	PostService.getPost(postId)
	.then(function(data){
		$scope.post = data.post;
		$ionicLoading.hide();
	});

	$scope.sharePost = function(link){
		window.plugins.socialsharing.share('Check this post here: ', null, null, link);
	};
}])


.controller('ImagePickerCtrl', ['$scope', '$rootScope', '$cordovaCamera', function($scope, $rootScope, $cordovaCamera) {

	$scope.images = [];

	$scope.selImages = function() {

		window.imagePicker.getPictures(
			function(results) {
				for (var i = 0; i < results.length; i++) {
					console.log('Image URI: ' + results[i]);
					$scope.images.push(results[i]);
				}
				if(!$scope.$$phase) {
					$scope.$apply();
				}
			}, function (error) {
				console.log('Error: ' + error);
			}
		);
	};

	$scope.removeImage = function(image) {
		$scope.images = _.without($scope.images, image);
	};

	$scope.shareImage = function(image) {
		window.plugins.socialsharing.share(null, null, image);
	};

	$scope.shareAll = function() {
		window.plugins.socialsharing.share(null, null, $scope.images);
	};
}])



// audios
.controller('audios', ['$scope', function($scope){
    
}])

// mediaplayer
.controller('media-player', ['$scope', function($scope){
    
}])

// LAYOUTS
.controller('LayoutsCtrl', ['$scope', function($scope) {

}])

// Community
.controller('communityCtrl', ['$scope', function($scope) {

}])

;
