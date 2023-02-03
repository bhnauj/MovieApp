import React, { useEffect, useRef } from "react";

import { Modalize } from "react-native-modalize";

import { View } from "react-native";

const BelowPopUp = (props) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (props.isVisible) {
      modalRef.current?.open();
    } else {
      modalRef.current?.close();
    }
  }, [props.isVisible]);

  return (
    <Modalize
      adjustToContentHeight
      ref={modalRef}
      onClose={props.closeModal}
      scrollViewProps={{
        keyboardShouldPersistTaps: "always",
      }}
      handlePosition="none"
      modalStyle={props.modalStyle}
    >
      <View style={{ marginTop: 20 }}>{props.children}</View>
    </Modalize>
  );
};

export default React.memo(BelowPopUp);
