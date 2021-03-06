import React from "react";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";

const styles = {
  radioButton: {
    marginBottom: 16
  }
};

const RadioGroup = () =>
  <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
    <RadioButton value="light" label="Simple" style={styles.radioButton} />
    <RadioButton
      value="not_light"
      label="Selected by default"
      style={styles.radioButton}
    />
    <RadioButton
      value="ludicrous"
      label="Custom icon"
      checkedIcon={<ActionFavorite style={{ color: "#F44336" }} />}
      uncheckedIcon={<ActionFavoriteBorder />}
      style={styles.radioButton}
    />
  </RadioButtonGroup>;

export default RadioGroup;
