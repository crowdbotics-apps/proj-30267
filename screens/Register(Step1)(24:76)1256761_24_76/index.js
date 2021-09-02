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
      <View style={styles.View_24_77} />
      <View style={styles.View_24_78}>
        <View style={styles.View_I24_78_12_9}>
          <Text style={styles.Text_I24_78_12_9}>SIGN UP</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_24_79}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("26_92"))
        }
      >
        <View style={styles.View_24_80} />
        <View style={styles.View_24_81}>
          <Text style={styles.Text_24_81}>Sign up</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_24_83}>
        <View style={styles.View_I24_83_24_62}>
          <View style={styles.View_I24_83_24_63} />
          <View style={styles.View_I24_83_24_64}>
            <Text style={styles.Text_I24_83_24_64}>Password</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4245/0d46/4134b57d9be28d434eae9699ef3d3379"
          }}
          style={styles.ImageBackground_I24_83_30_161}
        />
      </View>
      <View style={styles.View_26_208}>
        <View style={styles.View_I26_208_24_62}>
          <View style={styles.View_I26_208_24_63} />
          <View style={styles.View_I26_208_24_64}>
            <Text style={styles.Text_I26_208_24_64}>Email</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_24_84}>
        <View style={styles.View_I24_84_12_141}>
          <View style={styles.View_I24_84_12_142}>
            <View style={styles.View_I24_84_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I24_84_12_144}
            />
            <View style={styles.View_I24_84_12_145} />
          </View>
          <View style={styles.View_I24_84_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f65/9806/75f5dac283d67ac62418ebef96ed81dc"
              }}
              style={styles.ImageBackground_I24_84_12_147}
            />
          </View>
          <View style={styles.View_I24_84_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4428/819a/98a26b0a7a32dca70fe527751c779098"
              }}
              style={styles.ImageBackground_I24_84_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I24_84_12_157}>
          <View style={styles.View_I24_84_12_158}>
            <Text style={styles.Text_I24_84_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111.08686937009051%") },
  View_24_77: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111.08686937009051%"),
    minHeight: hp("111.08686937009051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_24_78: {
    width: wp("39.236888262331036%"),
    height: hp("5.526986669321529%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.864991306145974%"),
    top: hp("14.122517903645834%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_78_12_9: {
    flexGrow: 1,
    width: wp("40.03484412945173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0016329522653322215%"),
    top: hp("-0.27322404371584774%"),
    justifyContent: "center"
  },
  Text_I24_78_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  TouchableOpacity_24_79: {
    width: wp("90.90079386540253%"),
    height: hp("7.248713800815937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8327410647802673%"),
    top: hp("63.7909602597763%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_80: {
    width: wp("90.90079386540253%"),
    height: hp("7.248713800815937%"),
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
  View_24_81: {
    width: wp("19.884156587834685%"),
    top: hp("2.242091444672127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.31914879857154%"),
    justifyContent: "center"
  },
  Text_24_81: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_24_83: {
    width: wp("90.89423780457491%"),
    height: hp("6.155822837287611%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.848906241297152%"),
    top: hp("47.2747135683487%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_83_24_62: {
    flexGrow: 1,
    width: wp("90.89423780457491%"),
    height: hp("6.155822837287611%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_83_24_63: {
    width: wp("90.89423780457491%"),
    height: hp("6.155822837287611%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I24_83_24_64: {
    width: wp("18.027449442544857%"),
    minWidth: wp("18.027449442544857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.188541396107899%"),
    top: hp("1.9176212164873618%"),
    justifyContent: "flex-start"
  },
  Text_I24_83_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I24_83_30_161: {
    flexGrow: 1,
    width: wp("4.781176615670861%"),
    height: hp("2.1933870888798617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86166743989381%"),
    top: hp("2.316334208504095%")
  },
  View_26_208: {
    width: wp("90.89423780457491%"),
    height: hp("6.155822837287611%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.659386771453698%"),
    top: hp("34.706040679431354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_208_24_62: {
    flexGrow: 1,
    width: wp("90.89423780457491%"),
    height: hp("6.155822837287611%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I26_208_24_63: {
    width: wp("90.89423780457491%"),
    height: hp("6.155822837287611%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I26_208_24_64: {
    width: wp("10.610453942136742%"),
    minWidth: wp("10.610453942136742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1885413961079%"),
    top: hp("1.9176212164873618%"),
    justifyContent: "flex-start"
  },
  Text_I26_208_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_84: {
    width: wp("99.3708040907556%"),
    height: hp("6.1693431249733175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6291959092443933%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_84_12_141: {
    flexGrow: 1,
    width: wp("18.025810427337948%"),
    height: hp("2.2145127989555315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.62420481489718%"),
    top: hp("2.1729682964053962%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_84_12_142: {
    width: wp("6.63214821822677%"),
    minWidth: wp("6.63214821822677%"),
    height: hp("1.6498991700469472%"),
    minHeight: hp("1.6498991700469472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.392022688659154%"),
    top: hp("0.2913845041410519%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_84_12_143: {
    width: wp("5.8369242115326365%"),
    height: hp("1.5575574395435106%"),
    top: hp("0.045542899376707524%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00027485335158417%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I24_84_12_144: {
    width: wp("0.3564673344774508%"),
    height: hp("0.5470088270844006%"),
    top: hp("0.5561703541239758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.095808785493361%")
  },
  View_I24_84_12_145: {
    width: wp("4.774076405836495%"),
    height: hp("1.0094219869603225%"),
    top: hp("0.31960075670252763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5316977457093799%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I24_84_12_146: {
    width: wp("5.5750354500194135%"),
    height: hp("2.0580432454093556%"),
    top: hp("0.14506689186304644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.2978529183726835%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I24_84_12_147: {
    width: wp("4.070699648502983%"),
    height: hp("1.5092035460341824%"),
    top: hp("0.18327223147199456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7085658774576018%")
  },
  View_I24_84_12_151: {
    width: wp("4.777899595747307%"),
    minWidth: wp("4.777899595747307%"),
    height: hp("1.6469416071156988%"),
    minHeight: hp("1.6469416071156988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0016410361874363844%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I24_84_12_152: {
    width: wp("4.511914306707077%"),
    height: hp("1.464370691059717%"),
    top: hp("0.0913526191086067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17713894313874334%")
  },
  View_I24_84_12_157: {
    flexGrow: 1,
    width: wp("14.852833612754102%"),
    height: hp("3.1657221538773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.573395424322241%"),
    top: hp("1.1017679516734973%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_84_12_158: {
    flexGrow: 1,
    width: wp("14.318951187095669%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08748420502669685%"),
    top: hp("0.8198055413251366%"),
    justifyContent: "flex-start"
  },
  Text_I24_84_12_158: {
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
