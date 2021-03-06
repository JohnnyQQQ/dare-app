// Ionic Starter App

angular.module('underscore', [])
.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('your_app_name', ['ionic', 'angularMoment', 'your_app_name.controllers', 'your_app_name.directives', 'your_app_name.filters', 'your_app_name.services', 'your_app_name.factories', 'your_app_name.config', 'underscore', 'ngMap', 'ngResource', 'ngCordova', 'templates', 'slugifier', 'ionic.contrib.ui.tinderCards'])

.run(['$ionicPlatform', 'PushNotificationsService', function($ionicPlatform, PushNotificationsService) {

  $ionicPlatform.on("deviceready", function(){
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    PushNotificationsService.register();
  });

  $ionicPlatform.on("resume", function(){
    PushNotificationsService.register();
  });
}])


.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider

  //INTRO
  
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "side-menu.html",
    controller: 'AppCtrl'
  })



  //MISCELLANEOUS
  .state('app.miscellaneous', {
    url: "/miscellaneous",
    views: {
      'menuContent': {
        templateUrl: "miscellaneous.html",
        controller: 'MiscellaneousCtrl'
      }
    }
  })

  .state('app.maps', {
    url: "/miscellaneous/maps",
    views: {
      'menuContent': {
        templateUrl: "maps.html",
        controller: 'MapsCtrl'
      }
    }
  })

  .state('app.image-picker', {
    url: "/miscellaneous/image-picker",
    views: {
      'menuContent': {
        templateUrl: "image-picker.html",
        controller: 'ImagePickerCtrl'
      }
    }
  })



  //LAYOUTS
  .state('app.layouts', {
    url: "/layouts",
    views: {
      'menuContent': {
        templateUrl: "layouts.html",
        controller: 'LayoutsCtrl'
      }
    }
  })
  
    //Community
  .state('app.community', {
    url: "/community",
    views: {
      'menuContent': {
        templateUrl: "community.html",
        controller: 'communityCtrl'
      }
    }
  })


  .state('app.slider', {
    url: "/layouts/slider",
    views: {
      'menuContent': {
        templateUrl: "slider.html",
        controller: 'SliderCtrl'
      }
    }
  })



  //FEEDS
  .state('app.feeds-categories', {
    url: "/feeds-categories",
    views: {
      'menuContent': {
        templateUrl: "feeds-categories.html",
        controller: 'FeedsCategoriesCtrl'
      }
    }
  })
  



  .state('app.category-feeds', {
    url: "/category-feeds/:categoryId",
    views: {
      'menuContent': {
        templateUrl: "category-feeds.html",
        controller: 'CategoryFeedsCtrl'
      }
    }
  })

  .state('app.feed-entries', {
    url: "/feed-entries/:categoryId/:sourceId",
    views: {
      'menuContent': {
        templateUrl: "feed-entries.html",
        controller: 'FeedEntriesCtrl'
      }
    }
  })


  //WORDPRESS
  .state('app.wordpress', {
    url: "/wordpress",
    views: {
      'menuContent': {
        templateUrl: "wordpress.html",
        controller: 'WordpressCtrl'
      }
    }
  })

  .state('app.post', {
    url: "/wordpress/:postId",
    views: {
      'menuContent': {
        templateUrl: "wordpress_post.html",
        controller: 'WordpressPostCtrl'
      }
    }
  })


  //OTHERS
  .state('app.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "settings.html",
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('app.forms', {
    url: "/forms",
    views: {
      'menuContent': {
        templateUrl: "forms.html",
        controller: 'FormsCtrl'
      }
    }
  })
  // Audio app page Jquirke 20150426 
   .state('app.audios', {
    url: "/audios",
    views: {
      'menuContent': {
        templateUrl: "audios.html",
        controller: 'audios'
      }
    }
  })
  
    //media player Jquirke 20150426  
  .state('app.media-player', {
    url: "/media-player",
    views: {
      'menuContent': {
        templateUrl: "media-player.html",
        controller: 'media-player'
      }
    }
  })
  

  
      //media player Jquirke 20150426  
  .state('app.audiopage', {
    url: "/audiopage",
    views: {
      'menuContent': {
        templateUrl: "audiopage.html",
        controller: 'audiopage'
      }
    }
  })
  
 
 //media Audios Jquirke 20150426  
  .state('app.motivation', {
    url: "/motivation",
    views: {
      'menuContent': {
        templateUrl: "motivation.html",
        controller: 'motivation'
      }
    }
  })
  
     .state('app.dareresponse', {
    url: "/dareresponse",
    views: {
      'menuContent': {
        templateUrl: "dareresponse.html",
        controller: 'dareresponse'
      }
    }
  })
  
  
      .state('app.deeprelease', {
    url: "/deeprelease",
    views: {
      'menuContent': {
        templateUrl: "deeprelease.html",
        controller: 'deeprelease'
      }
    }
  })
  
      
   .state('app.success', {
    url: "/success",
    views: {
      'menuContent': {
        templateUrl: "success.html",
        controller: 'success'
      }
    }
  })
  
  
  ///////////////////////////////////////////////////
  
  .state('app.profile', {
    url: "/profile",
    views: {
      'menuContent': {
        templateUrl: "profile.html",
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('app.bookmarks', {
    url: "/bookmarks",
    views: {
      'menuContent': {
        templateUrl: "bookmarks.html",
        controller: 'BookMarksCtrl'
      }
    }
  })

;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/profile');
}]);

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

angular.module('your_app_name.directives', [])

.directive('myTabs', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {},
		controller: ['$scope', function($scope) {
			var tabs = $scope.tabs = [];

			$scope.select = function(tab) {
				angular.forEach(tabs, function(tab) {
					tab.selected = false;
				});
				tab.selected = true;
				$scope.$emit('my-tabs-changed', tab);
			};

			this.addTab = function(tab) {
				if (tabs.length === 0) {
					$scope.select(tab);
				}
				tabs.push(tab);
			};
		}],
		templateUrl: 'partials/my-tabs.html'
	};
})

.directive('myTab', function() {
	return {
		require: '^myTabs',
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@'
		},
		link: function(scope, element, attrs, tabsCtrl) {
			tabsCtrl.addTab(scope);
		},
		templateUrl: 'partials/my-tab.html'
	};
})

.directive('validPin', ['$http', function($http) {
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, c) {
			scope.$watch(attrs.ngModel, function(pinValue) {
				// $http({
				// 	method: 'POST',
				// 	url: '/api/check/' + attrs.validPin,
				// 	data: {'pin': attrs.validPin}
				// }).success(function(data, status, headers, cfg) {
				// 	c.$setValidity('valid-pin', data.isValid);
				// }).error(function(data, status, headers, cfg) {
				// 	c.$setValidity('valid-pin', false);
				// });
				if(pinValue=="12345")
				{
					c.$setValidity('valid-pin', true);
				}
				else
				{
					c.$setValidity('valid-pin', false);
				}
			});
		}
	};
}])


.directive('showHideContainer', function(){
	return {
		scope: {

		},
		controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
			$scope.show = false;

			$scope.toggleType = function($event){
				$event.stopPropagation();
				$event.preventDefault();

				$scope.show = !$scope.show;

				// Emit event
				$scope.$broadcast("toggle-type", $scope.show);
			};
		}],
		templateUrl: 'partials/show-hide-password.html',
		restrict: 'A',
		replace: false,
		transclude: true
	};
})


.directive('showHideInput', function(){
	return {
		scope: {

		},
		link: function(scope, element, attrs) {
			// listen to event
			scope.$on("toggle-type", function(event, show){
				var password_input = element[0],
						input_type = password_input.getAttribute('type');

				if(!show)
				{
					password_input.setAttribute('type', 'password');
				}

				if(show)
				{
					password_input.setAttribute('type', 'text');
				}
			});
		},
		require: '^showHideContainer',
		restrict: 'A',
		replace: false,
		transclude: false
	};
})


.directive('biggerText', ['$ionicGesture', function($ionicGesture) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$ionicGesture.on('touch', function(event){
				event.stopPropagation();
				event.preventDefault();

				var text_element = document.querySelector(attrs.biggerText),
						root_element = document.querySelector(".menu-content"),
						current_size_str = window.getComputedStyle(text_element, null).getPropertyValue('font-size'),
						current_size = parseFloat(current_size_str),
						new_size = Math.min((current_size+2), 24),
						new_size_str = new_size + 'px';

				root_element.classList.remove("post-size-"+current_size_str);
				root_element.classList.add("post-size-"+new_size_str);
			}, element);
		}
	};
}])

.directive('smallerText', ['$ionicGesture', function($ionicGesture) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$ionicGesture.on('touch', function(event){
				event.stopPropagation();
				event.preventDefault();

				var text_element = document.querySelector(attrs.smallerText),
				root_element = document.querySelector(".menu-content"),
				current_size_str = window.getComputedStyle(text_element, null).getPropertyValue('font-size'),
				current_size = parseFloat(current_size_str),
				new_size = Math.max((current_size-2), 12),
				new_size_str = new_size + 'px';

				root_element.classList.remove("post-size-"+current_size_str);
				root_element.classList.add("post-size-"+new_size_str);
			}, element);
		}
	};
}])



;


angular.module('your_app_name.filters', [])

.filter('rawHtml', ['$sce', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
}]);

angular.module('your_app_name.services', [])

.service('FeedList', ['$rootScope', 'FeedLoader', '$q', function ($rootScope, FeedLoader, $q){
	this.get = function(feedSourceUrl) {
		var response = $q.defer();
		//num is the number of results to pull form the source
		FeedLoader.fetch({q: feedSourceUrl, num: 20}, {}, function (data){
			response.resolve(data.responseData);
		});
		return response.promise;
	};
}])


// PUSH NOTIFICATIONS
.service('PushNotificationsService', ['$rootScope', '$cordovaPush', 'NodePushServer', 'GCM_SENDER_ID', function ($rootScope, $cordovaPush, NodePushServer, GCM_SENDER_ID){
	/* Apple recommends you register your application for push notifications on the device every time it’s run since tokens can change. The documentation says: ‘By requesting the device token and passing it to the provider every time your application launches, you help to ensure that the provider has the current token for the device. If a user restores a backup to a device other than the one that the backup was created for (for example, the user migrates data to a new device), he or she must launch the application at least once for it to receive notifications again. If the user restores backup data to a new device or reinstalls the operating system, the device token changes. Moreover, never cache a device token and give that to your provider; always get the token from the system whenever you need it.’ */
	this.register = function() {
		var config = {};

		// ANDROID PUSH NOTIFICATIONS
		if(ionic.Platform.isAndroid())
		{
			config = {
				"senderID": GCM_SENDER_ID
			};

			$cordovaPush.register(config).then(function(result) {
				// Success
				console.log("$cordovaPush.register Success");
				console.log(result);
			}, function(err) {
				// Error
				console.log("$cordovaPush.register Error");
				console.log(err);
			});

			$rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
				console.log(JSON.stringify([notification]));
				switch(notification.event)
				{
					case 'registered':
						if (notification.regid.length > 0 ) {
							console.log('registration ID = ' + notification.regid);
							NodePushServer.storeDeviceToken("android", notification.regid);
						}
						break;

					case 'message':
						if(notification.foreground == "1")
						{
							console.log("Notification received when app was opened (foreground = true)");
						}
						else
						{
							if(notification.coldstart == "1")
							{
								console.log("Notification received when app was closed (not even in background, foreground = false, coldstart = true)");
							}
							else
							{
								console.log("Notification received when app was in background (started but not focused, foreground = false, coldstart = false)");
							}
						}

						// this is the actual push notification. its format depends on the data model from the push server
						console.log('message = ' + notification.message);
						break;

					case 'error':
						console.log('GCM error = ' + notification.msg);
						break;

					default:
						console.log('An unknown GCM event has occurred');
						break;
				}
			});

			// WARNING: dangerous to unregister (results in loss of tokenID)
			// $cordovaPush.unregister(options).then(function(result) {
			//   // Success!
			// }, function(err) {
			//   // Error
			// });
		}

		if(ionic.Platform.isIOS())
		{
			config = {
				"badge": true,
				"sound": true,
				"alert": true
			};

			$cordovaPush.register(config).then(function(result) {
				// Success -- send deviceToken to server, and store for future use
				console.log("result: " + result);
				NodePushServer.storeDeviceToken("ios", result);
			}, function(err) {
				console.log("Registration error: " + err);
			});

			$rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
				console.log(notification.alert, "Push Notification Received");
			});
		}
	};
}])


// BOOKMARKS FUNCTIONS
.service('BookMarkService', ['_', '$rootScope', function (_, $rootScope){

	this.bookmarkFeedPost = function(bookmark_post){

		var user_bookmarks = !_.isUndefined(window.localStorage.ionFullApp_feed_bookmarks) ?
														JSON.parse(window.localStorage.ionFullApp_feed_bookmarks) : [];

		//check if this post is already saved

		var existing_post = _.find(user_bookmarks, function(post){ return post.link == bookmark_post.link; });

		if(!existing_post){
			user_bookmarks.push({
				link: bookmark_post.link,
				title : bookmark_post.title,
				date: bookmark_post.publishedDate,
				excerpt: bookmark_post.contentSnippet
			});
		}

		window.localStorage.ionFullApp_feed_bookmarks = JSON.stringify(user_bookmarks);
		$rootScope.$broadcast("new-bookmark");
	};

	this.bookmarkWordpressPost = function(bookmark_post){

		var user_bookmarks = !_.isUndefined(window.localStorage.ionFullApp_wordpress_bookmarks) ?
														JSON.parse(window.localStorage.ionFullApp_wordpress_bookmarks) : [];

		//check if this post is already saved

		var existing_post = _.find(user_bookmarks, function(post){ return post.id == bookmark_post.id; });

		if(!existing_post){
			user_bookmarks.push({
				id: bookmark_post.id,
				title : bookmark_post.title,
				date: bookmark_post.date,
				excerpt: bookmark_post.excerpt
			});
		}

		window.localStorage.ionFullApp_wordpress_bookmarks = JSON.stringify(user_bookmarks);
		$rootScope.$broadcast("new-bookmark");
	};

	this.getBookmarks = function(){
		return {
			feeds : JSON.parse(window.localStorage.ionFullApp_feed_bookmarks || '[]'),
			wordpress: JSON.parse(window.localStorage.ionFullApp_wordpress_bookmarks || '[]')
		};
	};
}])


// WP POSTS RELATED FUNCTIONS
.service('PostService', ['$rootScope', '$http', '$q', 'WORDPRESS_API_URL', function ($rootScope, $http, $q, WORDPRESS_API_URL){

	this.getRecentPosts = function(page) {
		var deferred = $q.defer();

		$http.jsonp(WORDPRESS_API_URL + 'get_recent_posts/' +
		'?page='+ page +
		'&callback=JSON_CALLBACK')
		.success(function(data) {
			deferred.resolve(data);
		})
		.error(function(data) {
			deferred.reject(data);
		});

		return deferred.promise;
	};


	this.getPost = function(postId) {
		var deferred = $q.defer();

		$http.jsonp(WORDPRESS_API_URL + 'get_post/' +
		'?post_id='+ postId +
		'&callback=JSON_CALLBACK')
		.success(function(data) {
			deferred.resolve(data);
		})
		.error(function(data) {
			deferred.reject(data);
		});

		return deferred.promise;
	};

	this.shortenPosts = function(posts) {
		//we will shorten the post
		//define the max length (characters) of your post content
		var maxLength = 500;
		return _.map(posts, function(post){
			if(post.content.length > maxLength){
				//trim the string to the maximum length
				var trimmedString = post.content.substr(0, maxLength);
				//re-trim if we are in the middle of a word
				trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf("</p>")));
				post.content = trimmedString;
			}
			return post;
		});
	};

	this.sharePost = function(link){
		window.plugins.socialsharing.share('Check this post here: ', null, null, link);
	};

}])


;

angular.module('your_app_name.factories', [])

.factory('FeedLoader', ['$resource', function ($resource){
  return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
    fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
  });
}])


// Factory for node-pushserver (running locally in this case), if you are using other push notifications server you need to change this
.factory('NodePushServer', ['$http', function ($http){
  // Configure push notifications server address
  // 		- If you are running a local push notifications server you can test this by setting the local IP (on mac run: ipconfig getifaddr en1)
  var push_server_address = "http://192.168.1.102:8000";

  return {
    // Stores the device token in a db using node-pushserver
    // type:  Platform type (ios, android etc)
    storeDeviceToken: function(type, regId) {
      // Create a random userid to store with it
      var user = {
        user: 'user' + Math.floor((Math.random() * 10000000) + 1),
        type: type,
        token: regId
      };
      console.log("Post token for registered device with data " + JSON.stringify(user));

      $http.post(push_server_address+'/subscribe', JSON.stringify(user))
      .success(function (data, status) {
        console.log("Token stored, device is successfully subscribed to receive push notifications.");
      })
      .error(function (data, status) {
        console.log("Error storing device token." + data + " " + status);
      });
    },
    // CURRENTLY NOT USED!
    // Removes the device token from the db via node-pushserver API unsubscribe (running locally in this case).
    // If you registered the same device with different userids, *ALL* will be removed. (It's recommended to register each
    // time the app opens which this currently does. However in many cases you will always receive the same device token as
    // previously so multiple userids will be created with the same token unless you add code to check).
    removeDeviceToken: function(token) {
      var tkn = {"token": token};
      $http.post(push_server_address+'/unsubscribe', JSON.stringify(tkn))
      .success(function (data, status) {
        console.log("Token removed, device is successfully unsubscribed and will not receive push notifications.");
      })
      .error(function (data, status) {
        console.log("Error removing device token." + data + " " + status);
      });
    }
  };
}])


.factory('AdMob', ['$window', function ($window){
  var admob = $window.AdMob;

  if(admob)
  {
    // Register AdMob events
    // new events, with variable to differentiate: adNetwork, adType, adEvent
    document.addEventListener('onAdFailLoad', function(data){
      console.log('error: ' + data.error +
      ', reason: ' + data.reason +
      ', adNetwork:' + data.adNetwork +
      ', adType:' + data.adType +
      ', adEvent:' + data.adEvent); // adType: 'banner' or 'interstitial'
    });
    document.addEventListener('onAdLoaded', function(data){
      console.log('onAdLoaded: ' + data);
    });
    document.addEventListener('onAdPresent', function(data){
      console.log('onAdPresent: ' + data);
    });
    document.addEventListener('onAdLeaveApp', function(data){
      console.log('onAdLeaveApp: ' + data);
    });
    document.addEventListener('onAdDismiss', function(data){
      console.log('onAdDismiss: ' + data);
    });

    var defaultOptions = {
      // bannerId: admobid.banner,
      // interstitialId: admobid.interstitial,
      // adSize: 'SMART_BANNER',
      // width: integer, // valid when set adSize 'CUSTOM'
      // height: integer, // valid when set adSize 'CUSTOM'
      position: admob.AD_POSITION.BOTTOM_CENTER,
      // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
      bgColor: 'black', // color name, or '#RRGGBB'
      // x: integer,		// valid when set position to 0 / POS_XY
      // y: integer,		// valid when set position to 0 / POS_XY
      isTesting: true, // set to true, to receiving test ad for testing purpose
      // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
    };
    var admobid = {};

    if(ionic.Platform.isAndroid())
    {
      admobid = { // for Android
        banner: 'ca-app-pub-6869992474017983/9375997553',
        interstitial: 'ca-app-pub-6869992474017983/1657046752'
      };
    }

    if(ionic.Platform.isIOS())
    {
      admobid = { // for iOS
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
      };
    }

    admob.setOptions(defaultOptions);

    // Prepare the ad before showing it
    // 		- (for example at the beginning of a game level)
    admob.prepareInterstitial({
      adId: admobid.interstitial,
      autoShow: false,
      success: function(){
        console.log('interstitial prepared');
      },
      error: function(){
        console.log('failed to prepare interstitial');
      }
    });
  }
  else
  {
    console.log("No AdMob?");
  }

  return {
    showBanner: function() {
      if(admob)
      {
        admob.createBanner({
          adId:admobid.banner,
          position:admob.AD_POSITION.BOTTOM_CENTER,
          autoShow:true,
          success: function(){
            console.log('banner created');
          },
          error: function(){
            console.log('failed to create banner');
          }
        });
      }
    },
    showInterstitial: function() {
      if(admob)
      {
        // If you didn't prepare it before, you can show it like this
        // admob.prepareInterstitial({adId:admobid.interstitial, autoShow:autoshow});

        // If you did prepare it before, then show it like this
        // 		- (for example: check and show it at end of a game level)
        admob.showInterstitial();
      }
    },
    removeAds: function() {
      if(admob)
      {
        admob.removeBanner();
      }
    }
  };
}])

.factory('iAd', ['$window', function ($window){
  var iAd = $window.iAd;

  // preppare and load ad resource in background, e.g. at begining of game level
  if(iAd) {
    iAd.prepareInterstitial( { autoShow:false } );
  }
  else
  {
    console.log("No iAd?");
  }

  return {
    showBanner: function() {
      if(iAd)
      {
        // show a default banner at bottom
        iAd.createBanner({
          position:iAd.AD_POSITION.BOTTOM_CENTER,
          autoShow:true
        });
      }
    },
    showInterstitial: function() {
      // ** Notice: iAd interstitial Ad only supports iPad.
      if(iAd)
      {
        // If you did prepare it before, then show it like this
        // 		- (for example: check and show it at end of a game level)
        iAd.showInterstitial();
      }
    },
    removeAds: function() {
      if(iAd)
      {
        iAd.removeBanner();
      }
    }
  };
}])

;

angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("audiopage.html","<ion-view class=\"category-feeds-view\">\r\n  <ion-nav-title>\r\n    <span>feeds</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <div class=\"list category-feeds\">\r\n      <a ng-repeat=\"source in category_sources\" class=\"item item-icon-right\" ui-sref=\"app.feed-entries({categoryId: categoryId, sourceId: (source.title | slugify)})\">\r\n        <img class=\"thumbnail\" ng-src=\"{{source.image}}\"/>\r\n        <div>\r\n          <span class=\"title\">{{source.title}}</span>\r\n          <p class=\"description\">{{source.description}}</p>\r\n            <p>Hello here is the page</p>\r\n        </div>\r\n        <i class=\"icon ion-arrow-right-c\"></i>\r\n      </a>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>");
$templateCache.put("audios.html","<ion-view class=\"feeds-categories-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>Quotes</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <div class=\"row categories-list\">\r\n        \r\n     <iframe width=\"100%\" height=\"600px\" src=\"http://dareresponse.com/quotes/book-quotes.php\"> </iframe>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("bookmarks.html","<ion-view class=\"bookmarks-view\">\r\n  <ion-nav-title>\r\n    <span>Bookmarks</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <div ng-if=\"(bookmarks.wordpress.length == 0 && bookmarks.feeds.length == 0)\" class=\"row bookmarks-container\">\r\n      <div class=\"col col-center\">\r\n        <div class=\"empty-results\">\r\n          <i class=\"icon ion-bookmark\"></i>\r\n          <h3 class=\"no-bookmarks\">There\'s nothing here yet. Start exploring!</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ul ng-if=\"(bookmarks.wordpress.length > 0 || bookmarks.feeds.length > 0)\" class=\"bookmarks-list\">\r\n      <div ng-if=\"bookmarks.feeds.length > 0\" class=\"item item-divider\">\r\n        Feeds Bookmarks\r\n      </div>\r\n      <li class=\"bookmark-item\" ng-repeat=\"bookmark in bookmarks.feeds\">\r\n        <a ng-click=goToFeedPost(bookmark.link)>\r\n          <h2 class=\"post-title\" ng-bind-html=\"bookmark.title | rawHtml\"></h2>\r\n          <p class=\"post-date\">Posted <span class=\"post-time\" am-time-ago=\"bookmark.date\"></span></p>\r\n        </a>\r\n      </li>\r\n      <div ng-if=\"bookmarks.wordpress.length > 0\" class=\"item item-divider\">\r\n        Wordpress bookmarks\r\n      </div>\r\n      <li class=\"bookmark-item\" ng-repeat=\"bookmark in bookmarks.wordpress\">\r\n        <a ng-click=goToWordpressPost(bookmark.id)>\r\n          <h2 class=\"post-title\" ng-bind-html=\"bookmark.title | rawHtml\"></h2>\r\n          <p class=\"post-date\">Posted <span class=\"post-time\" am-time-ago=\"bookmark.date\"></span></p>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("category-feeds.html","<ion-view class=\"category-feeds-view\">\r\n  <ion-nav-title>\r\n    <span>{{categoryTitle}} feeds</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <div class=\"list category-feeds\">\r\n      <a ng-repeat=\"source in category_sources\" class=\"item item-icon-right\" ui-sref=\"app.feed-entries({categoryId: categoryId, sourceId: (source.title | slugify)})\">\r\n        <img class=\"thumbnail\" ng-src=\"{{source.image}}\"/>\r\n        <div>\r\n          <span class=\"title\">{{source.title}}</span>\r\n          <p class=\"description\">{{source.description}}</p>\r\n        </div>\r\n        <i class=\"icon ion-arrow-right-c\"></i>\r\n      </a>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("community.html","<ion-view class=\"layouts-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>DARE Community</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <div class=\"list layouts-functionalities\">\r\n        \r\n      <a class=\"item item-icon-left item-icon-right\" href=\"#\" onclick=\"window.open(\'https://m.facebook.com/groups/465283313648260\', \'_system\', \'location=yes\'); return false;\">\r\n        <i class=\"icon ion-social-facebook\"></i>\r\n        <div>\r\n          <span class=\"title\">Facebook</span>\r\n          <p class=\"description\">Our Dare Facebook Page</p>\r\n        </div>\r\n        <i class=\"icon icon ion-arrow-right-c\"></i>\r\n      </a>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("dareresponse.html","<ion-view class=\"feeds-categories-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>Dare Response</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n     \r\n <div class=\"list card\">\r\n\r\n  <div class=\"item item-avatar\">\r\n    <img src=\"img/dare-app-logo.jpg\">\r\n    <h2>Dare Response Audio</h2>\r\n    <p>From the DARE Book</p>\r\n  </div>\r\n\r\n  <div class=\"item item-body\">\r\n      <video controls=\"controls\" \r\n             preload=\"metadata\" \r\n             autoplay=\"autoplay\" \r\n             poster=\"http://i.gyazo.com/5630ce2cc95d12dcaf99186054eba97a.png\"\r\n             webkit-playsinline=\"webkit-playsinline\" \r\n             width=\"100%\"\r\n             class=\"videoPlayer\">\r\n          <source src=\"https://s3.amazonaws.com/bmd/audios/app/The+Dare+Response.wav\" type=\"video/mp4\"/>\r\n      </video>\r\n    <p>\r\n   This is the Dare Response audio\r\n    </p>\r\n    \r\n  </div>\r\n\r\n \r\n\r\n</div>\r\n      \r\n      \r\n      \r\n      \r\n\r\n  </ion-content>\r\n  \r\n</ion-view>\r\n\r\n");
$templateCache.put("deeprelease.html","<ion-view class=\"feeds-categories-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>Deep Release Method</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n     \r\n <div class=\"list card\">\r\n\r\n  <div class=\"item item-avatar\">\r\n    <img src=\"img/dare-app-logo.jpg\">\r\n    <h2>Deep Release</h2>\r\n    <p>From the DARE BOOK</p>\r\n  </div>\r\n\r\n  <div class=\"item item-body\">\r\n      <video controls=\"controls\" \r\n             preload=\"metadata\" \r\n             autoplay=\"autoplay\" \r\n             poster=\"http://i.gyazo.com/5630ce2cc95d12dcaf99186054eba97a.png\"\r\n             webkit-playsinline=\"webkit-playsinline\" \r\n             width=\"100%\"\r\n             class=\"videoPlayer\">\r\n          <source src=\"https://s3.amazonaws.com/bmd/audios/Deep_Release.mp3\" type=\"video/mp4\"/>\r\n      </video>\r\n    <p>\r\n   This is the method Deep Release\r\n    </p>\r\n    \r\n  </div>\r\n\r\n \r\n\r\n</div>\r\n      \r\n      \r\n      \r\n      \r\n\r\n  </ion-content>\r\n  \r\n</ion-view>\r\n");
$templateCache.put("feed-entries.html","<ion-view class=\"feed-entries-view\">\r\n  <ion-nav-title>\r\n    <span>{{sourceTitle}}</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <!-- Refresh to get the new posts -->\r\n    <ion-refresher pulling-text=\"Pull to refresh...\" on-refresh=\"doRefresh()\">\r\n    </ion-refresher>\r\n\r\n    <div class=\"entries-list\">\r\n      <div ng-repeat=\"entry in feed.entries\" class=\"list card entry-item\">\r\n        <div class=\"entry-heading item item-text-wrap\">\r\n          <h2 class=\"entry-title\" ng-bind-html=\"entry.title | rawHtml\"></h2>\r\n          <p class=\"entry-author\">\r\n            Published <span am-time-ago=\"entry.publishedDate\"></span>\r\n          </p>\r\n        </div>\r\n        <div class=\"entry-content item item-text-wrap\">\r\n          <p class=\"entry-excerpt\" ng-bind-html=\"entry.contentSnippet | rawHtml\"></p>\r\n          <div class=\"entry-actions row\">\r\n            <div class=\"actions col col-center col-66\">\r\n              <a class=\"button button-icon icon ion-bookmark\" ng-click=\"bookmarkPost(entry)\"></a>\r\n            </div>\r\n            <div class=\"read-more col col-center col-33\">\r\n              <a class=\"button button-small button-block button-assertive\" href=\"#\" ng-click=\"readMore(entry.link)\">\r\n                Read more\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("feeds-categories-Audios.html","<ion-view class=\"feeds-categories-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>Quotes</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <div class=\"row categories-list\">\r\n        \r\n     <iframe width=\"100%\" height=\"600px\" src=\"http://dareresponse.com/quotes/book-quotes.php\"> </iframe>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("feeds-categories.html","<ion-view class=\"feeds-categories-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>Feeds Categories</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <div class=\"row categories-list\">\r\n      <div ng-repeat=\"category in feeds_categories\" class=\"col col-50\">\r\n        <a class=\"feed-category\" ui-sref=\"app.category-feeds({categoryId: (category.title | slugify)})\">\r\n          <img class=\"category-image\" ng-src=\"{{category.image}}\"/>\r\n          <div class=\"category-bg\"></div>\r\n          <span class=\"category-title\">{{category.title}}</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("forgot-password.html","<ion-view class=\"forgot-password-view\">\r\n  <ion-content scroll=\"false\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-center\">\r\n        <div class=\"card forgot-password-container\">\r\n          <form name=\"forgot_password_form\" class=\"\" novalidate>\r\n            <div class=\"item item-body\">\r\n              <label class=\"item item-input\">\r\n                <input type=\"email\" placeholder=\"Email\" name=\"user_email\" ng-model=\"user.email\" required>\r\n              </label>\r\n            </div>\r\n            <div class=\"item item-body bottom-content\">\r\n              <button type=\"submit\" class=\"button button-positive button-block\" ng-click=\"recoverPassword()\" ng-disabled=\"forgot_password_form.$invalid\">\r\n                Recover it\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"alternative-actions\">\r\n          <button class=\"log-in button button-small button-clear button-light\" ng-click=\"goToLogIn()\">\r\n            Log In\r\n          </button>\r\n          <button class=\"sign-up button button-small button-clear button-light\" ng-click=\"goToSignUp()\">\r\n            Sign Up\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("forms.html","<ion-view class=\"forms-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>Forms</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <ul class=\"list\">\r\n\r\n      <div class=\"item item-divider\">Inline Labels</div>\r\n      \r\n      <label class=\"item item-input\">\r\n        <span class=\"input-label\">First Name</span>\r\n        <input type=\"text\">\r\n      </label>\r\n      <label class=\"item item-input\">\r\n        <span class=\"input-label\">Last Name</span>\r\n        <input type=\"text\">\r\n      </label>\r\n      <label class=\"item item-input\">\r\n        <span class=\"input-label\">Email</span>\r\n        <input type=\"email\">\r\n      </label>\r\n\r\n      <div class=\"item item-divider\">Floating Labels</div>\r\n\r\n      <label class=\"item item-input item-floating-label\">\r\n        <span class=\"input-label\">Telephone</span>\r\n        <input type=\"tel\" placeholder=\"Your phone\">\r\n      </label>\r\n      <label class=\"item item-input item-floating-label\">\r\n        <span class=\"input-label\">Number</span>\r\n        <input type=\"number\" placeholder=\"Some number\">\r\n      </label>\r\n\r\n      <div class=\"item item-divider\">Stacked Labels</div>\r\n\r\n      <label class=\"item item-input item-stacked-label\">\r\n        <span class=\"input-label\">Birth date</span>\r\n        <input type=\"date\">\r\n      </label>\r\n      <label class=\"item item-input item-stacked-label\">\r\n        <span class=\"input-label\">Month</span>\r\n        <input type=\"month\">\r\n      </label>\r\n\r\n      <div class=\"item item-divider\">Placeholder Labels</div>\r\n\r\n      <label class=\"item item-input\">\r\n        <textarea placeholder=\"Description\"></textarea>\r\n      </label>\r\n      <label class=\"item item-input\">\r\n        <input type=\"password\" placeholder=\"Your password\">\r\n      </label>\r\n\r\n      <div class=\"item item-divider\">Inset Inputs</div>\r\n\r\n      <div class=\"item item-input-inset\">\r\n        <label class=\"item-input-wrapper\">\r\n          <input type=\"text\" placeholder=\"Search...\">\r\n        </label>\r\n        <button class=\"button button-small\">\r\n          Submit\r\n        </button>\r\n      </div>\r\n    </ul>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("image-picker.html","<ion-view class=\"image-picker-view\">\r\n  <ion-nav-title>\r\n    <span>Image picker</span>\r\n  </ion-nav-title>\r\n  <ion-content class=\"padding\">\r\n    <button class=\"button button-block button-dark\" ng-click=\"selImages()\">\r\n      Select Images\r\n    </button>\r\n    <button  ng-show=\"images.length > 0\" class=\"button button-block button-stable\" ng-click=\"shareAll()\">\r\n      Share All\r\n    </button>\r\n    <div class=\"list card\" ng-repeat=\"img in images\">\r\n      <div class=\"item item-image\">\r\n        <img ng-src=\"{{img}}\">\r\n      </div>\r\n      <div class=\"item tabs tabs-secondary tabs-icon-left\">\r\n        <a class=\"tab-item image-option\" href=\"#\" ng-click=\"shareImage(img)\">\r\n          <i class=\"icon ion-share\"></i>\r\n          Share\r\n        </a>\r\n        <a class=\"tab-item assertive image-option\" href=\"#\" ng-click=\"removeImage(img)\">\r\n          <i class=\"icon ion-trash-a assertive\"></i>\r\n          Remove\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("layouts.html","<ion-view class=\"layouts-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>Audios</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <div class=\"list layouts-functionalities\">\r\n        \r\n      <a class=\"item item-icon-left item-icon-right\" ui-sref=\"app.motivation\">\r\n        <i class=\"icon ion-ios-musical-notes\"></i>\r\n        <div>\r\n          <span class=\"title\">Motivation</span>\r\n          <p class=\"description\">The Motivation Audio</p>\r\n        </div>\r\n        <i class=\"icon icon ion-arrow-right-c\"></i>\r\n      </a>\r\n        \r\n      <a class=\"item item-icon-left item-icon-right\" ui-sref=\"app.dareresponse\">\r\n        <i class=\"icon ion-ios-musical-notes\"></i>\r\n        <div>\r\n          <span class=\"title\">Dare Response</span>\r\n          <p class=\"description\">The Dare Response</p>\r\n        </div>\r\n        <i class=\"icon ion-arrow-right-c\"></i>\r\n      </a>\r\n            <a class=\"item item-icon-left item-icon-right\" ui-sref=\"app.success\">\r\n        <i class=\"icon ion-ios-musical-notes\"></i>\r\n        <div>\r\n          <span class=\"title\">Success</span>\r\n          <p class=\"description\">The Success Audio</p>\r\n        </div>\r\n        <i class=\"icon ion-arrow-right-c\"></i>\r\n      </a>\r\n        \r\n        \r\n            <a class=\"item item-icon-left item-icon-right\" ui-sref=\"app.deeprelease\">\r\n        <i class=\"icon ion-ios-musical-notes\"></i>\r\n        <div>\r\n          <span class=\"title\">Deep Release</span>\r\n          <p class=\"description\">The Deep Release Method</p>\r\n        </div>\r\n        <i class=\"icon ion-arrow-right-c\"></i>\r\n      </a>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("login-dep.html","<ion-view class=\"login-view\">\r\n  <ion-content scroll=\"false\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-center\">\r\n        <div class=\"card login-container\" content-tabs tabsdata=\'tabsdata\'>\r\n          <form name=\"login_form\" class=\"\" novalidate ng-cloak>\r\n            <my-tabs>\r\n              <my-tab title=\"Email\">\r\n                <div class=\"list\">\r\n                  <label class=\"item item-input\">\r\n                    <input type=\"email\" placeholder=\"Email\" name=\"user_email\" ng-model=\"user.email\" required>\r\n                  </label>\r\n                  <label class=\"item item-input\" show-hide-container>\r\n                    <input type=\"password\" placeholder=\"Password\" name=\"user_password\" ng-model=\"user.password\" required show-hide-input>\r\n                  </label>\r\n                </div>\r\n              </my-tab>\r\n              <my-tab title=\"Phone\">\r\n                <div class=\"list\">\r\n                  <label class=\"item item-input\">\r\n                    <input type=\"text\" placeholder=\"Phone number\" name=\"user_phone\" ng-model=\"user.phone\" required>\r\n                  </label>\r\n                  <label class=\"item item-input\" show-hide-container>\r\n                    <input type=\"password\" placeholder=\"PIN\" name=\"user_pin\" ng-model=\"user.pin\" required valid-pin=\"user.pin\" show-hide-input>\r\n                  </label>\r\n                </div>\r\n              </my-tab>\r\n            </my-tabs>\r\n            <div class=\"item item-body bottom-content\">\r\n              <button type=\"submit\" class=\"button button-positive button-block\" ng-click=\"doLogIn()\" ng-disabled=\"(selected_tab==\'Email\') ? (login_form.user_email.$invalid || login_form.user_password.$invalid) : ((selected_tab==\'Phone\') ? (login_form.user_phone.$invalid || login_form.user_pin.$invalid) : false)\">\r\n                Log In\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"alternative-actions\">\r\n          <button class=\"forgot-password button button-small button-clear button-light\" ng-click=\"goToForgotPassword()\">\r\n            Forgot Password?\r\n          </button>\r\n          <button class=\"sign-up button button-small button-clear button-light\" ng-click=\"goToSignUp()\">\r\n            Sign Up\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("maps.html","<ion-view class=\"maps-view\">\r\n  <ion-nav-title>\r\n    <span>Maps</span>\r\n  </ion-nav-title>\r\n  <ion-content scroll=\"false\">\r\n    <div class=\"mapWrap\"  data-tap-disabled=\"true\">\r\n      <div class=\"row center-map-action\">\r\n        <div class=\"col\">\r\n          <div class=\"list\">\r\n            <div class=\"item item-input-inset\">\r\n              <a class=\"button button-icon icon ion-pinpoint\" ng-click=\"centerOnMe()\"></a>\r\n              <label class=\"item-input-wrapper\">\r\n                <input type=\"text\" placeholder=\"My Location\" disabled ng-model=\"my_location\">\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <map center=\"{{center_position.lat}},{{center_position.lng}}\" zoom=\"15\">\r\n        <marker\r\n            position=\"{{current_position.lat}},{{current_position.lng}}\"\r\n            title=\"Hello Marker\"\r\n            visible=\"true\">\r\n        </marker>\r\n        <info-window id=\"1\" position=\"{{info_position.lat}},{{info_position.lng}}\" visible=\"true\">\r\n          <div ng-non-bindable=\"\">\r\n            <b>The best restaurant</b><br>\r\n            This is html so you can put whatever <br>\r\n            you want such as images and <a href=\"\">links</a> <br>\r\n            <img style=\" border-radius: 24px;\" src=\"http://lorempixel.com/50/50/food/?v=1\"></img>\r\n            <img style=\" border-radius: 24px;\" src=\"http://lorempixel.com/50/50/food/?v=2\"></img>\r\n            <img style=\" border-radius: 24px;\" src=\"http://lorempixel.com/50/50/food/?v=3\"></img>\r\n          </div>\r\n        </info-window>\r\n      </map>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("media-player.html","<ion-view class=\"feeds-categories-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>Deep Release Method</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n     \r\n    <div class=\"row categories-list\">\r\n       \r\n     <iframe width=\"100%\" height=\"800px\"src=\"http://dareresponse.com/audios/deep-release.html\"frameborder=\"0\" </iframe>\r\n  \r\n    \r\n    </div>\r\n\r\n  </ion-content>\r\n  \r\n</ion-view>");
$templateCache.put("miscellaneous.html","<ion-view class=\"miscellaneous-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>Miscellaneous</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <div class=\"list miscellaneous-functionalities\">\r\n      <a class=\"item item-icon-left item-icon-right\" href=\"#\" ng-controller=\"InAppBrowserCtrl\" ng-click=\"openBrowser()\">\r\n        <i class=\"icon ion-ios-browsers-outline\"></i>\r\n        <div>\r\n          <span class=\"title\">In App Browser</span>\r\n          <p class=\"description\">Show web browser view with external links</p>\r\n        </div>\r\n        <i class=\"icon ion-arrow-right-c\"></i>\r\n      </a>\r\n      <a class=\"item item-icon-left item-icon-right\" ui-sref=\"app.maps\">\r\n        <i class=\"icon ion-map\"></i>\r\n        <div>\r\n          <span class=\"title\">Maps & GeoLocation</span>\r\n          <p class=\"description\">Show map & access user\'s current location</p>\r\n        </div>\r\n        <i class=\"icon ion-arrow-right-c\"></i>\r\n      </a>\r\n      <a class=\"item item-icon-left item-icon-right\" ui-sref=\"app.image-picker\">\r\n        <i class=\"icon ion-images\"></i>\r\n        <div>\r\n          <span class=\"title\">Image Picker</span>\r\n          <p class=\"description\">Select and share images from your phone</p>\r\n        </div>\r\n        <i class=\"icon ion-arrow-right-c\"></i>\r\n      </a>\r\n      <a class=\"item item-icon-left item-icon-right\" href=\"#\" ng-controller=\"AdsCtrl\" ng-click=\"manageAdMob()\">\r\n        <i class=\"icon ion-social-usd-outline\"></i>\r\n        <div>\r\n          <span class=\"title\">AdMob</span>\r\n          <p class=\"description\">Show Google AdMob mobile ads</p>\r\n        </div>\r\n      </a>\r\n      <a class=\"item item-icon-left item-icon-right\" href=\"#\" ng-controller=\"AdsCtrl\" ng-click=\"manageiAd()\">\r\n        <i class=\"icon ion-social-usd-outline\"></i>\r\n        <div>\r\n          <span class=\"title\">iAd</span>\r\n          <p class=\"description\">Show Apple iAd mobile ads</p>\r\n        </div>\r\n      </a>\r\n      <a class=\"item item-icon-left item-icon-right\" href=\"#\" ng-controller=\"RateApp\" ng-click=\"rateApp()\">\r\n        <i class=\"icon ion-ios-star-half\"></i>\r\n        <div>\r\n          <span class=\"title\">Rate the app</span>\r\n          <p class=\"description\">Rate this app in Google and Apple stores</p>\r\n        </div>\r\n      </a>\r\n      <a class=\"item item-icon-left item-icon-right\" href=\"#\" ng-controller=\"SendMailCtrl\" ng-click=\"sendMail()\">\r\n        <i class=\"icon ion-email\"></i>\r\n        <div>\r\n          <span class=\"title\">Send email</span>\r\n          <p class=\"description\">Access your phone native email sender provider</p>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("motivation.html","<ion-view class=\"feeds-categories-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>Motivation</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n     \r\n <div class=\"list card\">\r\n\r\n  <div class=\"item item-avatar\">\r\n    <img src=\"img/dare-app-logo.jpg\">\r\n    <h2>Motivation Audio</h2>\r\n    <p>From the DARE book</p>\r\n  </div>\r\n\r\n  <div class=\"item item-body\">\r\n      <video controls=\"controls\" \r\n             preload=\"metadata\" \r\n             autoplay=\"autoplay\" \r\n             poster=\"http://i.gyazo.com/5630ce2cc95d12dcaf99186054eba97a.png\"\r\n             webkit-playsinline=\"webkit-playsinline\" \r\n             width=\"100%\"\r\n             class=\"videoPlayer\">\r\n          <source src=\"https://s3.amazonaws.com/bmd/audios/app/Motivation.wav\"/>\r\n      </video>\r\n    <p>\r\n   This is the Motivation audio\r\n    </p>\r\n    \r\n  </div>\r\n\r\n \r\n\r\n</div>\r\n\r\n  </ion-content>\r\n  \r\n</ion-view>");
$templateCache.put("profile.html","<ion-view class=\"profile-view\">\r\n  <ion-nav-title>\r\n    <span>Welcome to the Dare App</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <div class=\"top-content row\">\r\n      <div class=\"profile-container\">\r\n        <img class=\"user-image\" ng-src=\"img/dare-app-logo2.png\">\r\n        <div class=\"user-name\">DARE</div>\r\n        <div class=\"user-twitter\">www.DareResponse.com</div>\r\n      </div>\r\n         <div class=\"user-background-image\" style=\"background: url(http://dareresponse.com/images/dare-app-logo.jpg) no-repeat 0 100%\"></div>\r\n     </div>\r\n    </div>\r\n    <div class=\"bottom-content\">\r\n      <div class=\"user-bio\">\r\n        <p>If you suffer from anxiety or panic attacks, you are advised to either just “manage” the anxiety or medicate it away. \r\n\r\nDARE is a bold new book based on hard science and years of experience helping people end their anxiety problems. \r\n\r\n            It teaches a brand new approach to end anxiety and panic attacks and get people back living life to the fullest.</p>\r\n\r\n<p>Accompanying the book is this app that helps you achieve your goal and an online community to support you. You get all the tools you need to break free from anxiety and ensure lasting success. \r\n\r\nThis blend of information, technology and community support gets fast results. </p>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("settings.html","<ion-view class=\"settings-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>Settings</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <ul class=\"list\">\r\n\r\n      <div class=\"item item-divider\">TOGGLE</div>\r\n\r\n      <ion-toggle ng-model=\"airplaneMode\" toggle-class=\"toggle-assertive\">Airplane Mode</ion-toggle>\r\n      <ion-toggle ng-model=\"wifi\" toggle-class=\"toggle-positive\">Wi-Fi</ion-toggle>\r\n      <ion-toggle ng-model=\"bluetooth\" toggle-class=\"toggle-calm\">Bluetooth</ion-toggle>\r\n      <ion-toggle ng-model=\"personalHotspot\" toggle-class=\"toggle-dark\">Personal Hotspot</ion-toggle>\r\n\r\n      <div class=\"item item-divider\">CHECKBOXES</div>\r\n\r\n      <ion-checkbox ng-model=\"checkOpt1\">Option 1</ion-checkbox>\r\n      <ion-checkbox ng-model=\"checkOpt2\">Option 2</ion-checkbox>\r\n      <ion-checkbox ng-model=\"checkOpt3\">Option 3</ion-checkbox>\r\n\r\n      <div class=\"item item-divider\">RADIO</div>\r\n\r\n      <ion-radio ng-model=\"radioChoice\" ng-value=\"\'A\'\">Choose A</ion-radio>\r\n      <ion-radio ng-model=\"radioChoice\" ng-value=\"\'B\'\">Choose B</ion-radio>\r\n      <ion-radio ng-model=\"radioChoice\" ng-value=\"\'C\'\">Choose C</ion-radio>\r\n\r\n      <div class=\"item item-divider\">RANGES</div>\r\n\r\n      <div class=\"range\">\r\n        <i class=\"icon ion-volume-low\"></i>\r\n        <input type=\"range\" name=\"volume\">\r\n        <i class=\"icon ion-volume-high\"></i>\r\n      </div>\r\n      <div class=\"item range range-positive\">\r\n        <i class=\"icon ion-ios-sunny-outline\"></i>\r\n        <input type=\"range\" name=\"volume\" min=\"0\" max=\"100\" value=\"33\">\r\n        <i class=\"icon ion-ios-sunny\"></i>\r\n      </div>\r\n\r\n      <div class=\"item item-divider\"></div>\r\n\r\n      <a class=\"item logout-option\" ng-click=\"showLogOutMenu()\">\r\n        Logout\r\n      </a>\r\n    </ul>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("side-menu.html","<ion-side-menus enable-menu-with-back-views=\"false\">\r\n  <ion-side-menu-content class=\"post-size-14px\">\r\n    <ion-nav-bar class=\"bar app-top-bar\">\r\n      <ion-nav-back-button>\r\n      </ion-nav-back-button>\r\n      <ion-nav-buttons side=\"left\">\r\n        <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\">\r\n        </button>\r\n      </ion-nav-buttons>\r\n    </ion-nav-bar>\r\n    <ion-nav-view name=\"menuContent\"></ion-nav-view>\r\n  </ion-side-menu-content>\r\n\r\n  <ion-side-menu side=\"left\" class=\"main-menu\" expose-aside-when=\"large\">\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item class=\"heading-item item item-avatar\" nav-clear menu-close ui-sref=\"app.profile\">\r\n          <img ng-src=\"img/dare-app-logo.png\">\r\n          <h2 class=\"greeting\">Hi </h2>\r\n          <p class=\"message\">Welcome back</p>\r\n        </ion-item>\r\n          \r\n          \r\n                   <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.layouts\">\r\n          <i class=\"icon ion-asterisk\"></i>\r\n          <h2 class=\"menu-text\">Audio links</h2>\r\n        </ion-item>\r\n                  \r\n            <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.audios\">\r\n          <i class=\"icon ion-chatbox\"></i>\r\n          <h2 class=\"menu-text\">Inspire</h2>\r\n        </ion-item>\r\n          \r\n            <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.community\">\r\n          <i class=\"icon ion-person-stalker\"></i>\r\n          <h2 class=\"menu-text\">Community</h2>\r\n        </ion-item>\r\n          \r\n          \r\n          \r\n            <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.wordpress\">\r\n          <i class=\"icon ion-ios-checkmark\"></i>\r\n          <h2 class=\"menu-text\">DARE Website</h2>\r\n        </ion-item>\r\n          \r\n           \r\n         \r\n            \r\n            <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.bookmarks\">\r\n          <i class=\"icon ion-bookmark\"></i>\r\n          <h2 class=\"menu-text\">Book marked pages</h2>\r\n        </ion-item>\r\n          \r\n         \r\n          \r\n\r\n    </ion-list>\r\n    </ion-content>\r\n  </ion-side-menu>\r\n</ion-side-menus>\r\n");
$templateCache.put("signup.html","<ion-view class=\"signup-view\">\r\n  <ion-content scroll=\"false\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-center\">\r\n        <div class=\"card sign-up-container\">\r\n          <form name=\"signup_form\" class=\"\" novalidate>\r\n            <div class=\"item item-body\">\r\n              <label class=\"item item-input\">\r\n                <input type=\"email\" placeholder=\"Email\" name=\"user_email\" ng-model=\"user.email\" required>\r\n              </label>\r\n              <label class=\"item item-input\" show-hide-container>\r\n                <input type=\"password\" placeholder=\"Password\" name=\"user_password\" ng-model=\"user.password\" required show-hide-input>\r\n              </label>\r\n            </div>\r\n            <div class=\"item item-body bottom-content\">\r\n              <button type=\"submit\" class=\"button button-positive button-block\" ng-click=\"doSignUp()\" ng-disabled=\"signup_form.$invalid\">\r\n                Sign Up\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"alternative-actions\">\r\n          <button class=\"log-in button button-small button-clear button-light\" ng-click=\"goToLogIn()\">\r\n            Log In\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("slider.html","<ion-view class=\"slider-view\">\r\n  <ion-nav-title>\r\n    <span>Slider</span>\r\n  </ion-nav-title>\r\n  <ion-content scroll=\"false\">\r\n    <ion-slide-box show-pager=\"true\">\r\n      <ion-slide ng-repeat=\"i in [1,2,3,4,5]\">\r\n        <div class=\"list card\">\r\n          <div class=\"item item-image\">\r\n            <img ng-src=\"http://lorempixel.com/300/200/nature?v={{i}}\">\r\n          </div>\r\n          <div class=\"item item-body\">\r\n            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slide-box>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("success.html","<ion-view class=\"feeds-categories-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>Success Audio</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n     \r\n <div class=\"list card\">\r\n\r\n  <div class=\"item item-avatar\">\r\n    <img src=\"img/dare-app-logo.jpg\">\r\n    <h2>Success Audio</h2>\r\n    <p>From the DARE BOOK</p>\r\n  </div>\r\n\r\n  <div class=\"item item-body\">\r\n      <video controls=\"controls\" \r\n             preload=\"metadata\" \r\n             autoplay=\"autoplay\" \r\n             poster=\"http://i.gyazo.com/5630ce2cc95d12dcaf99186054eba97a.png\"\r\n             webkit-playsinline=\"webkit-playsinline\" \r\n             width=\"100%\"\r\n             class=\"videoPlayer\">\r\n          <source src=\"https://s3.amazonaws.com/bmd/audios/app/Success.wav\" type=\"video/mp4\"/>\r\n      </video>\r\n    <p>\r\n   This is the method Deep Success\r\n    </p>\r\n    \r\n  </div>\r\n\r\n \r\n\r\n</div>\r\n      \r\n      \r\n      \r\n      \r\n\r\n  </ion-content>\r\n  \r\n</ion-view>\r\n");
$templateCache.put("tinder-cards.html","<ion-view class=\"tinder-cards-view\">\r\n  <ion-nav-title>\r\n    <span>Tinder Cards</span>\r\n  </ion-nav-title>\r\n  <ion-content scroll=\"false\">\r\n    <td-cards>\r\n      <td-card id=\"td-card\" ng-repeat=\"card in cards\"\r\n      on-transition-left=\"transitionLeft(card)\"\r\n      on-transition-right=\"transitionRight(card)\"\r\n      on-transition-out=\"transitionOut(card)\"\r\n      on-destroy=\"cardDestroyed($index)\"\r\n      on-swipe-left=\"cardSwipedLeft($index)\"\r\n      on-swipe-right=\"cardSwipedRight($index)\"\r\n      on-partial-swipe=\"cardPartialSwipe(amt)\">\r\n        <div class=\"image\">\r\n          <div class=\"no-text overlayBox\">\r\n            <div class=\"noBox boxed\">\r\n              Nope\r\n            </div>\r\n          </div>\r\n          <img ng-src=\"{{card.image}}\">\r\n          <div class=\"yes-text overlayBox\">\r\n            <div class=\"yesBox boxed\">\r\n              Yes\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"title\">\r\n          {{card.name}}\r\n        </div>\r\n      </td-card>\r\n    </td-cards>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("walkthrough.html","<ion-view class=\"walkthrough-view\">\r\n  <ion-content scroll=\"false\">\r\n    <div class=\"top-content row\">\r\n      <div class=\"col col-center\">\r\n        <img ng-src=\"img/logo.png\">\r\n      </div>\r\n    </div>\r\n    <div class=\"bottom-content row\">\r\n      <div class=\"col col-center\">\r\n        <button class=\"login button button-block button-stable\" ng-click=\"goToLogIn()\">\r\n          Log In\r\n        </button>\r\n        <button class=\"sign-up button button-block button-stable\" ng-click=\"goToSignUp()\">\r\n          Sign Up\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("wordpress.html","<ion-view class=\"wordpress-view\">\r\n  <ion-nav-buttons side=\"left\">\r\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\r\n  </ion-nav-buttons>\r\n  <ion-nav-title>\r\n    <span>The Dare Blog</span>\r\n  </ion-nav-title>\r\n  <ion-content>\r\n    <!-- Refresh to get the new posts -->\r\n    <ion-refresher pulling-text=\"Pull to refresh...\" on-refresh=\"doRefresh()\">\r\n    </ion-refresher>\r\n\r\n    <div class=\"posts-list\">\r\n      <div ng-repeat=\"post in posts\" class=\"list card post-item\">\r\n        <div class=\"post-heading item item-text-wrap\">\r\n          <h2 class=\"post-title\" ng-bind-html=\"post.title | rawHtml\"></h2>\r\n          <p class=\"post-author\">\r\n            By <span style=\"color:FFFFFF;\">{{post.author.nickname}}</span> \r\n          </p>\r\n        </div>\r\n        <div class=\"post-content item item-text-wrap\">\r\n          <p class=\"post-excerpt\" ng-bind-html=\"post.content | rawHtml\"></p>\r\n          <div class=\"post-actions row\">\r\n            <div class=\"actions col col-center col-66\">\r\n              <a class=\"button button-icon icon ion-bookmark\" ng-click=\"bookmarkPost(post)\"></a>\r\n            </div>\r\n            <div class=\"read-more col col-center col-33\">\r\n              <a ui-sref=\"app.post({postId: post.id})\" class=\"button button-small button-block button-assertive\">\r\n                Read more\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Infinit scroll -->\r\n    <ion-infinite-scroll ng-if=\"moreDataCanBeLoaded()\" on-infinite=\"loadMoreData()\" distance=\"1%\" icon=\"ion-loading-c\">\r\n    </ion-infinite-scroll>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("wordpress_post.html","<ion-view class=\"post-view\">\r\n  <ion-content>\r\n    <div class=\"post-heading item item-text-wrap\">\r\n      <h1 class=\"post-title\">{{post.title}}</h1>\r\n      <p class=\"post-author\">\r\n        By <span>{{post.author.nickname}}</span> <span am-time-ago=\"post.date\"></span>\r\n      </p>\r\n    </div>\r\n    <div class=\"post-content item item-text-wrap\">\r\n      <p class=\"post-text\" ng-bind-html=\"post.content | rawHtml\"></p>\r\n    </div>\r\n    <div class=\"post-tags item item-text-wrap\">\r\n      <span class=\"post-tag button button-small button-outline button-stable\" ng-repeat=\"category in post.categories\">{{category.title}}</span>\r\n    </div>\r\n  </ion-content>\r\n  <ion-footer-bar class=\"post-footer bar bar-footer bar-dark\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-20 col-center\">\r\n        <a class=\"button button-icon icon icon-right ion-plus\" bigger-text=\".post-view .post-text\">A</a>\r\n      </div>\r\n      <div class=\"col col-20 col-center\">\r\n        <a class=\"button button-icon icon icon-right ion-minus\" smaller-text=\".post-view .post-text\">A</a>\r\n      </div>\r\n      <div class=\"col col-20 col-offset-20 col-center\">\r\n        <a class=\"button button-icon icon ion-heart\"></a>\r\n      </div>\r\n      <div class=\"col col-20 col-center\">\r\n        <a class=\"button button-icon icon ion-android-share-alt\" ng-click=\"sharePost(post.url)\"></a>\r\n      </div>\r\n    </div>\r\n  </ion-footer-bar>\r\n</ion-view>\r\n");
$templateCache.put("partials/my-tab.html","<div class=\"tab-content\" ng-show=\"selected\" ng-transclude></div>\r\n");
$templateCache.put("partials/my-tabs.html","<div class=\"item item-divider card-heding\">\r\n	<div class=\"tabs-striped tabs-background-dark tabs-color-stable\">\r\n		<div class=\"tabs\">\r\n			<a ng-repeat=\"tab in tabs\" ng-click=\"select(tab)\" ng-class=\"{ active: tab.selected }\" class=\"tab-item\">{{tab.title}}</a>\r\n		</div>\r\n	</div>\r\n</div>\r\n<div class=\"item item-body\">\r\n	<div class=\"tabs-content\" ng-transclude></div>\r\n</div>\r\n");
$templateCache.put("partials/show-hide-password.html","<div class=\"show-hide-input\" ng-transclude>\r\n</div>\r\n<a class=\"toggle-view-anchor\" on-touch=\"toggleType($event)\">\r\n	<span ng-show=\"show\">HIDE</span>\r\n	<span ng-show=\"!show\">SHOW</span>\r\n</a>\r\n");}]);
angular.module('your_app_name.config', [])
.constant('WORDPRESS_API_URL', 'http://dareresponse.com/api/')
.constant('GCM_SENDER_ID', 'sage-courier-91818')

;
