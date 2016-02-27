var app = angular.module(
    'liber',
    [
        'ui.router',
        'content-listing-controller',
        'content-controller',
        'create-content-controller',
        'content-service',
        'content-type-service',
        'content-type-listing-controller',
        'create-content-type-controller',
        'content-type-controller',
        'field-service',
        'field-listing-controller',
        'create-field-controller',
        'field-controller',
        'ngCkeditor'
    ]
);

app.config(
    function( $stateProvider, $urlRouterProvider ) {
		$stateProvider.state(
            'contentListing',
            {
				url: '/',
				templateUrl: 'content/content-listing.html',
				controller: 'ContentListingCtrl'
			}
        );
        $stateProvider.state(
            'content',
            {
				url: '/content/:id',
				templateUrl: 'content/content.html',
				controller: 'ContentCtrl'
			}
        );
        $stateProvider.state(
            'createContent',
            {
				url: '/content/create',
				templateUrl: 'content/content.html',
				controller: 'CreateContentCtrl'
			}
        );
        $stateProvider.state(
            'contentTypeListing',
            {
                url: '/content-types',
                templateUrl: 'content-types/content-type-listing.html',
                controller: 'ContentTypeListingCtrl'
            }
        );
        $stateProvider.state(
            'createContentType',
            {
                url: '/content-types/create',
                templateUrl: 'content-types/content-type.html',
                controller: 'CreateContentTypeCtrl'
            }
        );
        $stateProvider.state(
            'contentType',
            {
                url: '/content-types/:id',
                templateUrl: 'content-types/content-type.html',
                controller: 'ContentTypeCtrl'
            }
        );
		$stateProvider.state(
            'fieldListing',
            {
                url: '/fields',
                templateUrl: 'fields/field-listing.html',
                controller: 'FieldListingCtrl'
            }
        );
        $stateProvider.state(
            'createField',
            {
                url: '/fields/create',
                templateUrl: 'fields/field.html',
                controller: 'CreateFieldCtrl'
            }
        );
        $stateProvider.state(
            'field',
            {
                url: '/fields/:id',
                templateUrl: 'fields/field.html',
                controller: 'FieldCtrl'
            }
        );

        $urlRouterProvider.when( '', '/' );
	}
);
