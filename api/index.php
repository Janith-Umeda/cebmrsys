<?php
    header('Content-Type:application/json');
    header('Access-Control-Allow-Origin:*');

    require_once('dbconfig.php');
    
    if(!isset($_GET['method'])){
        die(
            json_encode([
                'status'=>false,
                'msg'=>'Invalid Request!'
            ])
        );
    }

    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        $method = $_GET['method'];

        if($method === 'me'){
            $userId = $_GET['userid'];

            $res = $conn->prepare("SELECT id,username,email FROM users WHERE id = :uid");
            $res->execute(['uid'=>$userId]);

            if($res->rowCount() > 0){
                echo json_encode([
                    "status"=>true,
                    'msg'=>'User Found',
                    'data'=>$res->fetch(PDO::FETCH_ASSOC)
                ]);
            }else{
                echo json_encode([
                    "status"=>false,
                    'msg'=>'Invalid User'
                ]);
            }

        }

    }

?>