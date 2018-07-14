
angularFormsApp.controller('efController',
    function efController($scope, $window, $routeParams, DataService) {

        if ($routeParams.id)
            $scope.employee = DataService.getEmployee($routeParams.id);
        else
            $scope.employee = { id: 0 };

        //$scope.employee = DataService.employee;
        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finanace",
            "Administration"
        ];

        

        $scope.submitForm = function () {

            if ($scope.editableEmployee.id == 0) {
                //$scope.employee = angular.copy($scope.editableEmployee);
                //insert new employee
                DataService.insertEmployee($scope.editableEmployee);
            }
            else {
                //update the employee
                DataService.updateEmployee($scope.editableEmployee);
            }

            $scope.employee = angular.copy($scope.editableEmployee);
            $window.history.back();
        };

        $scope.resetForm = function () {
            $window.history.back();
        }
    });