<?php

namespace app\controllers;

use Yii;
use app\models\Feedback;
use app\models\FeedbackSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\rest\ActiveController;
/**
 * FeedbackController implements the CRUD actions for Feedback model.
 */
class FeedbackController extends ActiveController
{
	public $enableCsrfValidation = false;
    public $modelClass ="app\models\Feedback";
}
