<?php

namespace Drupal\forms_demo\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class CustomFormController.
 */
class CustomFormController extends ControllerBase {

  /**
   * Show_custom_form.
   *
   * @return string
   *   Return Hello string.
   */
  public function show_custom_form() {
    return [
      '#type' => 'markup',
      '#markup' => $this->t('Implement method: show_custom_form')
    ];
  }

}
