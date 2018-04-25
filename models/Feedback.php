<?php

namespace app\models;

use Yii;
use yii\base\Model;

/**
 * This is the model class for table "feedback".
 *
 * @property string $email
 * @property string $contact
 */
class Feedback extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'feedback';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['email', 'contact'], 'string'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'email' => 'Email',
            'contact' => 'Contact',
        ];
    }

}
