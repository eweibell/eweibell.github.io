angular.module('app', ['cfp.hotkeys', 'ngAnimate'])
	.controller('MainController', function($scope, hotkeys) {
    
    	// functions
    	$scope.active = 0;
    
		$scope.previous = function() {
            if($scope.active != 0) $scope.active -= 1;
        }    
        
    	$scope.next = function() {
            if($scope.active + 1 < $scope.forests.length) $scope.active += 1;
        }
        
    	$scope.setActive = function(i) {
            $scope.active = i;
        }
    	
    	$scope.forests = [
            {
                'rank' : 1,
            	'name' : 'Sagano Bamboo Forest',
                'desc' : 'A magnificent Bamboo forest in the district of Arashiyama, west to Kyoto, Japan.',
                'location' : 'Kyoto, Japan',
                'img' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/130891/sagano.jpg'
        	},
            {
                'rank' : 2,
            	'name' : 'Giant Sequoia National Monument',
                'desc' : 'Located in the southern Sierra Nevada mountains of California. The forest is named for the majestic Giant Sequoia  trees which populate 38 distinct groves within the boundaries of the forest. The Sequoia National Forest covers 4,829 sq km (1,865 sq mi).',
                'location' : 'California, United States',
                'img' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/130891/sequoia.jpg'
        	},
            {
                'rank' : 3,
            	'name' : 'Redwood National Park',
                'desc' : 'Also in California, The Redwood National parks is a combination of four parks that together protect 45% of all remaining coast redwood (Sequoia sempervirens) old-growth forests, totaling at least 158 square km. These trees are the tallest and one of the most massive tree species on Earth.',
                'location' : 'California, United States',
                'img' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/130891/redwoods.jpg'
        	},
            {
                'rank' : 4,
            	'name' : 'Black Forest',
                'desc' : 'Schwarzwald or “Black Forest” is a wooded mountain range in Baden-Württemberg, southwestern Germany. It is bordered by the Rhine valley to the west and south. The name “Black Forest” was given by the Romans who referred to the forest blocking out most of the sunlight from getting inside the forest by the dense growth of conifers.',
                'location' : 'Germany',
                'img' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/130891/black-forest.jpg'
        	},
            {
                'rank' : 5,
            	'name' : 'Crooked Forest',
                'desc' : 'A grove of oddly-shaped pine trees. This young forest was planted around 1930 and has about 400 pines. It is generally believed that some form of human tool or technique was used to make the trees grow this way, but the method and motive are not currently known. Some believe that the woods were deliberately grown this way to make “Compass Timbers”, or trees that are deliberately shaped for the purpose of using those odd shapes in ship building. Another theory is that tanks from WWII are the cause, rolling over the young trees snapping the stem, but still surviving, forcing them to grow in the direction they were ran over.',
                'location' : 'Poland',
                'img' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/130891/crooked-forest.jpg'
        	}
        ];
    
    	// hot keys
    	hotkeys.add({
            combo: 'right',
            description: 'Next slide',
            callback: function() {
              $scope.next();
            }
        });
    	hotkeys.add({
            combo: 'left',
            description: 'Previous slide',
            callback: function() {
              $scope.previous();
            }
        });
	});