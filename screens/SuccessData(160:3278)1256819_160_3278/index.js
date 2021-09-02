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
      <View style={styles.View_160_3279}>
        <View style={styles.View_I160_3279_12_9}>
          <Text style={styles.Text_I160_3279_12_9}>
            Transaction Acknowledgment
          </Text>
        </View>
      </View>
      <View style={styles.View_160_3280}>
        <Text style={styles.Text_160_3280}>Transaction Status : </Text>
      </View>
      <View style={styles.View_161_3321}>
        <Text style={styles.Text_161_3321}>Transaction ID : </Text>
      </View>
      <View style={styles.View_161_3324}>
        <Text style={styles.Text_161_3324}>Amount :</Text>
      </View>
      <View style={styles.View_161_3322}>
        <Text style={styles.Text_161_3322}>Transaction Date &amp; Time : </Text>
      </View>
      <View style={styles.View_161_3323}>
        <Text style={styles.Text_161_3323}>Transaction Reference No : </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_160_3281}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10b7/d2ca/90cbfcf4468ae814ae396ec876b7af00"
        }}
        style={styles.ImageBackground_160_3282}
      />
      <View style={styles.View_160_3284}>
        <View style={styles.View_I160_3284_12_141}>
          <View style={styles.View_I160_3284_12_142}>
            <View style={styles.View_I160_3284_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I160_3284_12_144}
            />
            <View style={styles.View_I160_3284_12_145} />
          </View>
          <View style={styles.View_I160_3284_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I160_3284_12_147}
            />
          </View>
          <View style={styles.View_I160_3284_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I160_3284_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I160_3284_12_157}>
          <View style={styles.View_I160_3284_12_158}>
            <Text style={styles.Text_I160_3284_12_158}>9:27</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d07b/94a4/37bf6eceed8973f4f0da34955ae5a1b2"
        }}
        style={styles.ImageBackground_161_3325}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff09/6ea7/79e14c0226b0ec349a68f5ffc551fea2"
        }}
        style={styles.ImageBackground_176_4329}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_160_3279: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("15.846994535519126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_3279_12_9: {
    flexGrow: 1,
    width: wp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20.53333333333333%"),
    top: hp("1.2295081967213086%"),
    justifyContent: "center"
  },
  Text_I160_3279_12_9: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  View_160_3280: {
    width: wp("45.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("31.147540983606557%"),
    justifyContent: "center"
  },
  Text_160_3280: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  View_161_3321: {
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("38.9344262295082%"),
    justifyContent: "center"
  },
  Text_161_3321: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  View_161_3324: {
    width: wp("21.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("65.57377049180327%"),
    justifyContent: "center"
  },
  Text_161_3324: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  View_161_3322: {
    width: wp("59.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("47.81420765027322%"),
    justifyContent: "center"
  },
  Text_161_3322: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  View_161_3323: {
    width: wp("62.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("56.69398907103825%"),
    justifyContent: "center"
  },
  Text_161_3323: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  ImageBackground_160_3281: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0666666666666667%"),
    top: hp("6.0109289617486334%")
  },
  ImageBackground_160_3282: {
    width: wp("5.447619120279948%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("8.469945355191257%")
  },
  View_160_3284: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_3284_12_141: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_3284_12_142: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666683%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_3284_12_143: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0.0454928705601092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I160_3284_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I160_3284_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31871691427595605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I160_3284_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I160_3284_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18210489241803263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.71145833333334%")
  },
  View_I160_3284_12_151: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I160_3284_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09111915129781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17812500000000853%")
  },
  View_I160_3284_12_157: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.092896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_3284_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08854166666666607%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I160_3284_12_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  ImageBackground_161_3325: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666668%"),
    top: hp("31.147540983606557%")
  },
  ImageBackground_176_4329: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("63.79781420765027%"),
    minHeight: hp("63.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("110.92896174863387%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
