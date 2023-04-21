<?php 

$toDoList = [
    [
        "name" => "Fare la spesa",
        "check" => "done" 
    ],
    [
        "name" => "Lavare i piatti",
        "check" => "undone" 
    ],
    [
        "name" => "Fare il bucato",
        "check" => "done" 
    ],
    [
        "name" => "Pulire i vetri",
        "check" => "undone" 
    ],
];



if(isset($_POST['task'])) {
    $toDoList = ["name" => $_POST['task']['name'], "check" => $_POST['task']['check']];
};

header('Content-Type: application/json');

echo json_encode($toDoList);

