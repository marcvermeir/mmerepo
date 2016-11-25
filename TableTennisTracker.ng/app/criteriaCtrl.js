app.controller('criteriaCtrl', function ($scope, $modal, $filter, $location) {
    
    $scope.criteria = { selectedTeam : '', selectedDivision : '', selectedWeek : '' };

    var ttteams = [
      { value: "0",    label: "Alle" },
      { value: "287",  label: "A000 - Individueel Antwerpen" },
      { value: "34",   label: "A003 - KTTC Salamander Mechelen" },
      { value: "187",  label: "A008 - TTC Ekerse" }    
    ];

    var ttdivisions = [
      { value: "2378", label: "Super Afdeling - Heren" },
      { value: "2257", label: "Afdeling 1A - Nationaal - Heren" },
      { value: "2258", label: "Afdeling 1B - Nationaal - Heren" },
      { value: "2259", label: "Afdeling 2A - Nationaal - Heren" }
    ];

    var ttweeks = [
      { value: "1", label: "Week 1" },
      { value: "2", label: "Week 2" },
      { value: "3", label: "Week 3" },
      { value: "4", label: "Week 4" },
      { value: "5", label: "Week 5" },
      { value: "6", label: "Week 6" },
      { value: "7", label: "Week 7" },
      { value: "8", label: "Week 8" },
      { value: "9", label: "Week 9" },
      { value: "10", label: "Week 10" },
      { value: "11", label: "Week 11" },
      { value: "12", label: "Week 12" },
      { value: "13", label: "Week 13" },
      { value: "14", label: "Week 14" },
      { value: "15", label: "Week 15" },
      { value: "16", label: "Week 16" }
    ];

    $scope.ttteams = ttteams;
    $scope.ttdivisions = ttdivisions;
    $scope.ttweeks = ttweeks;
});   
