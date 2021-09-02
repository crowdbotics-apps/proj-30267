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
      <View style={styles.View_93_1085} />
      <View style={styles.View_93_1086}>
        <View style={styles.View_I93_1086_12_9}>
          <Text style={styles.Text_I93_1086_12_9}>Notification</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01ea/ad57/1bd18950cd8f60416a7125a4fb2d3176"
        }}
        style={styles.ImageBackground_93_1087}
      />
      <View style={styles.View_93_1088}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbed/7084/3a9b12b3dddb56ab6f668de0c583b7ca"
          }}
          style={styles.ImageBackground_I93_1088_54_885}
        />
        <View style={styles.View_I93_1088_54_886}>
          <Text style={styles.Text_I93_1088_54_886}>Ambr 2.00 pm</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15be/31b3/16b2d15959a83647b0c2b8a0d14d79b5"
        }}
        style={styles.ImageBackground_93_1089}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1ce/0588/889c1350240881729eafe115647248c1"
        }}
        style={styles.ImageBackground_93_1090}
      />
      <View style={styles.View_93_1091}>
        <Text style={styles.Text_93_1091}>A</Text>
      </View>
      <View style={styles.View_93_1092} />
      <View style={styles.View_93_1093}>
        <Text style={styles.Text_93_1093}>
          Verification was declined. Please provide valid documents.
        </Text>
      </View>
      <View style={styles.View_93_1094}>
        <View style={styles.View_I93_1094_12_141}>
          <View style={styles.View_I93_1094_12_142}>
            <View style={styles.View_I93_1094_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I93_1094_12_144}
            />
            <View style={styles.View_I93_1094_12_145} />
          </View>
          <View style={styles.View_I93_1094_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I93_1094_12_147}
            />
          </View>
          <View style={styles.View_I93_1094_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I93_1094_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I93_1094_12_157}>
          <View style={styles.View_I93_1094_12_158}>
            <Text style={styles.Text_I93_1094_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_93_1085: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_93_1086: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    top: hp("15.300546448087433%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I93_1086_12_9: {
    flexGrow: 1,
    width: wp("55.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.27322404371584774%"),
    justifyContent: "center"
  },
  Text_I93_1086_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  ImageBackground_93_1087: {
    width: wp("5.866666666666666%"),
    height: hp("2.404371376246051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333335%"),
    top: hp("2.185792349726776%")
  },
  View_93_1088: {
    width: wp("81.34611002604166%"),
    height: hp("4.911776579142919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("29.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I93_1088_54_885: {
    flexGrow: 1,
    width: wp("81.34303385416666%"),
    height: hp("0.013388279072248219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.003124999999997158%"),
    top: hp("4.898421490778688%")
  },
  View_I93_1088_54_886: {
    flexGrow: 1,
    width: wp("28.002140299479166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2671875%"),
    top: hp("0.6910647199453592%"),
    justifyContent: "flex-start"
  },
  Text_I93_1088_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_93_1089: {
    width: wp("1.4666666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.93333333333334%"),
    top: hp("30.327868852459016%")
  },
  ImageBackground_93_1090: {
    width: wp("12.533333333333333%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("29.23497267759563%")
  },
  View_93_1091: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("30.05464480874317%"),
    justifyContent: "flex-start"
  },
  Text_93_1091: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_93_1092: {
    width: wp("90.93333333333334%"),
    height: hp("46.72131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("39.34426229508197%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_93_1093: {
    width: wp("83.73333333333333%"),
    minWidth: wp("83.73333333333333%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("43.0327868852459%"),
    justifyContent: "flex-start"
  },
  Text_93_1093: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_93_1094: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I93_1094_12_141: {
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
  View_I93_1094_12_142: {
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
  View_I93_1094_12_143: {
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
  ImageBackground_I93_1094_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I93_1094_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31871691427595605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I93_1094_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I93_1094_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18210489241803263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111979166666629%")
  },
  View_I93_1094_12_151: {
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
  ImageBackground_I93_1094_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09111915129781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17786458333333144%")
  },
  View_I93_1094_12_157: {
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
  View_I93_1094_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0888020833333325%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I93_1094_12_158: {
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
