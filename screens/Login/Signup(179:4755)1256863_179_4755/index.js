import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_179_4756} />
      <TouchableOpacity
        style={styles.TouchableOpacity_179_4757}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("12_6"))
        }
      >
        <View style={styles.View_179_4758} />
        <View style={styles.View_179_4759}>
          <Text style={styles.Text_179_4759}>login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_179_4816}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("24_76"))
        }
      >
        <View style={styles.View_179_4817} />
        <View style={styles.View_179_4818}>
          <Text style={styles.Text_179_4818}>signup</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85ea/8585/88511fa91986ae2a70eef58d27c91a1d"
        }}
        style={styles.ImageBackground_179_4764}
      />
      <View style={styles.View_179_4819}>
        <Text style={styles.Text_179_4819}>OR</Text>
      </View>
      <View style={styles.View_179_4765}>
        <View style={styles.View_I179_4765_12_141}>
          <View style={styles.View_I179_4765_12_142}>
            <View style={styles.View_I179_4765_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I179_4765_12_144}
            />
            <View style={styles.View_I179_4765_12_145} />
          </View>
          <View style={styles.View_I179_4765_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f65/9806/75f5dac283d67ac62418ebef96ed81dc"
              }}
              style={styles.ImageBackground_I179_4765_12_147}
            />
          </View>
          <View style={styles.View_I179_4765_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6a6/16d6/c9621bad35777f188b1303e3796b0cf9"
              }}
              style={styles.ImageBackground_I179_4765_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I179_4765_12_157}>
          <View style={styles.View_I179_4765_12_158}>
            <Text style={styles.Text_I179_4765_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111.0958078519894%") },
  View_179_4756: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111.0958078519894%"),
    minHeight: hp("111.0958078519894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_179_4757: {
    width: wp("90.86888709152294%"),
    height: hp("7.256936766410786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.295881606791296%"),
    top: hp("33.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_179_4758: {
    width: wp("90.86888709152294%"),
    height: hp("7.256936766410786%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_179_4759: {
    width: wp("14.581771536074758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.95444310292957%"),
    top: hp("2.2497625298838813%"),
    justifyContent: "center"
  },
  Text_179_4759: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  TouchableOpacity_179_4816: {
    width: wp("90.86888709152294%"),
    height: hp("7.256936766410786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.295881606791296%"),
    top: hp("55.60109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_179_4817: {
    width: wp("90.86888709152294%"),
    height: hp("7.256936766410786%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_179_4818: {
    width: wp("18.28886845864358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.10088454055261%"),
    top: hp("2.246635728846485%"),
    justifyContent: "center"
  },
  Text_179_4818: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  ImageBackground_179_4764: {
    width: wp("41.39125903168988%"),
    height: hp("11.555499717837474%"),
    minHeight: hp("11.555499717837474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.6004921737139%"),
    top: hp("10.929491220276212%")
  },
  View_179_4819: {
    width: wp("6.61985200848912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.19252262180079%"),
    top: hp("47.81421598840932%"),
    justifyContent: "center"
  },
  Text_179_4819: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_179_4765: {
    width: wp("99.33533194897186%"),
    height: hp("6.178334762489861%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6646680510281336%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_4765_12_141: {
    flexGrow: 1,
    width: wp("18.019749090477426%"),
    height: hp("2.216142643996275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.59552623419391%"),
    top: hp("2.179993176069416%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_4765_12_142: {
    width: wp("6.630202092962537%"),
    minWidth: wp("6.630202092962537%"),
    height: hp("1.6504980827289855%"),
    minHeight: hp("1.6504980827289855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.387826276400318%"),
    top: hp("0.2924226020854679%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_4765_12_143: {
    width: wp("5.835247119996696%"),
    height: hp("1.558084305518312%"),
    top: hp("0.04553873030865807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00029091146522830513%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I179_4765_12_144: {
    width: wp("0.35651869259700625%"),
    height: hp("0.5470405510865926%"),
    top: hp("0.5567165020385074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.093690138400319%")
  },
  View_I179_4765_12_145: {
    width: wp("4.772614709825106%"),
    height: hp("1.0098532249367302%"),
    top: hp("0.3196507855191255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5315922174395098%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I179_4765_12_146: {
    width: wp("5.573627813043161%"),
    height: hp("2.058546008959494%"),
    top: hp("0.14554216562073075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.295816959799026%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_4765_12_147: {
    width: wp("4.069674124209014%"),
    height: hp("1.5095705543059468%"),
    top: hp("0.18333893656079248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.708434064795199%")
  },
  View_I179_4765_12_151: {
    width: wp("4.776653631678125%"),
    minWidth: wp("4.776653631678125%"),
    height: hp("1.6473725845253533%"),
    minHeight: hp("1.6473725845253533%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.001713145295170193%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_4765_12_152: {
    width: wp("4.51070701667949%"),
    height: hp("1.464777696328085%"),
    top: hp("0.0913734644488553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1770681118286319%")
  },
  View_I179_4765_12_157: {
    flexGrow: 1,
    width: wp("14.848294923457559%"),
    height: hp("3.1670638120890966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.571891940289776%"),
    top: hp("1.102268239839481%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_4765_12_158: {
    flexGrow: 1,
    width: wp("14.314382485061088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08740273354958283%"),
    top: hp("0.8198180485292861%"),
    justifyContent: "flex-start"
  },
  Text_I179_4765_12_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
