<?php 

if (file_exists('database.json')){
$decodeString = file_get_contents('database.json');
$toDoList = json_decode($decodeString, true);
} else {
    $toDoList = [];
}

if(isset($_POST['addtask'])){
    $toDoList[] = [
        'name' => $_POST['addtask']['name'], 
        'done' => $_POST['addtask']['done'] === "true"?true:false
    ];

    $encodeString = json_encode($toDoList);
    file_put_contents('database.json', $encodeString);

} else if(isset($_POST['setSwitchDone'])){

    $index = $_POST['setSwitchDone'];

    $toDoList[$index]['done'] = !$toDoList[$index]['done'];
    
    $encodeString = json_encode($toDoList);
    file_put_contents('database.json', $encodeString);

} else if(isset($_POST['deleteTask'])){

    $index = $_POST['deleteTask'];

    array_splice($toDoList, $index, 1);
    
    $encodeString = json_encode($toDoList);
    file_put_contents('database.json', $encodeString);
}; 

header('Content-Type: application/json');
echo json_encode($toDoList);

