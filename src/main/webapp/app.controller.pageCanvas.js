(function () {
    'use strict';

    function main($rootScope, $scope, AnnotationListFactory, FilesFactory, DocumentInfoFactory) {

        $rootScope.docInfo = DocumentInfoFactory.get();
        $scope.selectedFile = FilesFactory.selectedFile;
        $scope.annotationsList = AnnotationListFactory.query();
        $rootScope.selectedDrawingTool = 'select';        
    }
    angular.module('GroupDocsAnnotationApp').controller('PageCanvasController', main);
})();

