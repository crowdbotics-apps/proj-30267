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
      <View style={styles.View_35_373} />
      <View style={styles.View_35_374}>
        <View style={styles.View_I35_374_12_9}>
          <Text style={styles.Text_I35_374_12_9}> UBO/Owner Verification</Text>
        </View>
      </View>
      <View style={styles.View_35_378}>
        <View style={styles.View_I35_378_24_62}>
          <View style={styles.View_I35_378_24_63} />
          <View style={styles.View_I35_378_24_64}>
            <Text style={styles.Text_I35_378_24_64}>Full Name(owner1)</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_35_380}>
        <View style={styles.View_I35_380_19_95}>
          <View style={styles.View_I35_380_19_96}>
            <View style={styles.View_I35_380_19_97}>
              <Text style={styles.Text_I35_380_19_97}>UBO %</Text>
            </View>
            <View style={styles.View_I35_380_19_98} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I35_380_19_99}
            />
            <View style={styles.View_I35_380_19_100}>
              <Text style={styles.Text_I35_380_19_100}>Typing|</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I35_380_19_89}>
          <View style={styles.View_I35_380_19_90}>
            <View style={styles.View_I35_380_19_92} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I35_380_19_93}
            />
            <View style={styles.View_I35_380_19_94}>
              <Text style={styles.Text_I35_380_19_94}>Placeholder text...</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I35_380_19_83}>
          <View style={styles.View_I35_380_19_84}>
            <View style={styles.View_I35_380_19_86} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I35_380_19_87}
            />
            <View style={styles.View_I35_380_19_88}>
              <Text style={styles.Text_I35_380_19_88}>Select...</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_37_400}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("37_404"))
        }
      >
        <View style={styles.View_37_401} />
        <View style={styles.View_37_402}>
          <Text style={styles.Text_37_402}>ADD OWNERS</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5be/975e/2972f210f16995a6c47ce5cf879b2e42"
          }}
          style={styles.ImageBackground_38_399}
        />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_179_4590}
      />
      <View style={styles.View_35_382}>
        <View style={styles.View_I35_382_12_141}>
          <View style={styles.View_I35_382_12_142}>
            <View style={styles.View_I35_382_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I35_382_12_144}
            />
            <View style={styles.View_I35_382_12_145} />
          </View>
          <View style={styles.View_I35_382_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I35_382_12_147}
            />
          </View>
          <View style={styles.View_I35_382_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I35_382_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I35_382_12_157}>
          <View style={styles.View_I35_382_12_158}>
            <Text style={styles.Text_I35_382_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_35_373: {
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
  View_35_374: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("15.573770491803279%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_374_12_9: {
    flexGrow: 1,
    width: wp("77.06666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-22.93333333333333%"),
    top: hp("0.8196721311475397%"),
    justifyContent: "center"
  },
  Text_I35_374_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_35_378: {
    width: wp("91.46666666666667%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("31.830601092896178%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_378_24_62: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_378_24_63: {
    width: wp("91.46666666666667%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I35_378_24_64: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109218%"),
    justifyContent: "flex-start"
  },
  Text_I35_378_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_380: {
    width: wp("91.46666666666667%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("47.404371584699454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_380_19_95: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_380_19_96: {
    width: wp("91.46666666666667%"),
    height: hp("10.655737704918032%"),
    top: hp("-0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I35_380_19_97: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I35_380_19_97: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I35_380_19_98: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("4.098360655737693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(63, 162, 247, 1)",
    borderWidth: 1
  },
  ImageBackground_I35_380_19_99: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("6.5573770491803245%")
  },
  View_I35_380_19_100: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("5.737704918032776%"),
    justifyContent: "flex-start"
  },
  Text_I35_380_19_100: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I35_380_19_89: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_380_19_90: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I35_380_19_92: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(235, 87, 87, 1)",
    borderWidth: 1
  },
  ImageBackground_I35_380_19_93: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("2.4590163934426315%")
  },
  View_I35_380_19_94: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I35_380_19_94: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I35_380_19_83: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_380_19_84: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I35_380_19_86: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  ImageBackground_I35_380_19_87: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("2.4590163934426315%")
  },
  View_I35_380_19_88: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I35_380_19_88: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_37_400: {
    width: wp("84.8%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("77.45901639344262%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_37_401: {
    width: wp("84.8%"),
    height: hp("7.5136612021857925%"),
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
  View_37_402: {
    width: wp("54.57093098958333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.30009765625%"),
    top: hp("1.6638250298838813%"),
    justifyContent: "center"
  },
  Text_37_402: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  ImageBackground_38_399: {
    width: wp("4.630403645833334%"),
    height: hp("2.37213301528347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.733333333333334%"),
    top: hp("2.5956284153005384%")
  },
  ImageBackground_179_4590: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("4.371584699453552%")
  },
  View_35_382: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I35_382_12_141: {
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
  View_I35_382_12_142: {
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
  View_I35_382_12_143: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0.045559575648907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I35_382_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I35_382_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31878361936475397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I35_382_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I35_382_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18217159750683054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111002604166572%")
  },
  View_I35_382_12_151: {
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
  ImageBackground_I35_382_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09105244620901631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17776692708333997%")
  },
  View_I35_382_12_157: {
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
  View_I35_382_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08889973958333286%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I35_382_12_158: {
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
