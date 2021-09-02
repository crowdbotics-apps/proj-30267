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
      <View style={styles.View_157_3104}>
        <View style={styles.View_I157_3104_12_9}>
          <Text style={styles.Text_I157_3104_12_9}>Transfer Page</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_157_3105}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d83/45bb/2dbd92e178b38ed129c1b9171bc74205"
        }}
        style={styles.ImageBackground_157_3106}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10b7/d2ca/90cbfcf4468ae814ae396ec876b7af00"
        }}
        style={styles.ImageBackground_157_3107}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_157_3108}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("33_209"))
        }
      />
      <View style={styles.View_157_3112}>
        <View style={styles.View_I157_3112_111_1503}>
          <View style={styles.View_I157_3112_111_1504} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
            }}
            style={styles.ImageBackground_I157_3112_111_1505}
          />
          <View style={styles.View_I157_3112_111_1506}>
            <Text style={styles.Text_I157_3112_111_1506}>
              Choose Withdraw Account
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_157_3113}>
        <View style={styles.View_157_3114} />
        <View style={styles.View_157_3115}>
          <Text style={styles.Text_157_3115}>back</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_157_3116}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("158_4782"))
        }
      >
        <View style={styles.View_157_3117} />
        <View style={styles.View_157_3118}>
          <Text style={styles.Text_157_3118}>NEXT</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_157_3119}>
        <View style={styles.View_I157_3119_12_141}>
          <View style={styles.View_I157_3119_12_142}>
            <View style={styles.View_I157_3119_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I157_3119_12_144}
            />
            <View style={styles.View_I157_3119_12_145} />
          </View>
          <View style={styles.View_I157_3119_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I157_3119_12_147}
            />
          </View>
          <View style={styles.View_I157_3119_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I157_3119_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I157_3119_12_157}>
          <View style={styles.View_I157_3119_12_158}>
            <Text style={styles.Text_I157_3119_12_158}>9:27</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_158_3052}>
        <View style={styles.View_158_4709}>
          <View style={styles.View_158_4710} />
        </View>
        <View style={styles.View_158_3054}>
          <View style={styles.View_158_3055} />
          <View style={styles.View_158_4510}>
            <View style={styles.View_158_4614}>
              <View style={styles.View_158_4615} />
              <View style={styles.View_158_4616} />
              <View style={styles.View_158_4617}>
                <Text style={styles.Text_158_4617}>Account 1</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_158_4402}>
            <View style={styles.View_158_4506}>
              <View style={styles.View_158_4507} />
              <View style={styles.View_158_4508} />
              <View style={styles.View_158_4509}>
                <Text style={styles.Text_158_4509}>Account 2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_158_4294}>
            <View style={styles.View_158_4398}>
              <View style={styles.View_158_4399} />
              <View style={styles.View_158_4400} />
              <View style={styles.View_158_4401}>
                <Text style={styles.Text_158_4401}>Account 3</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_158_4186}>
            <View style={styles.View_158_4290}>
              <View style={styles.View_158_4291} />
              <View style={styles.View_158_4292} />
              <View style={styles.View_158_4293}>
                <Text style={styles.Text_158_4293}>Account 4</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_158_4078}>
            <View style={styles.View_158_4182}>
              <View style={styles.View_158_4183} />
              <View style={styles.View_158_4184} />
              <View style={styles.View_158_4185}>
                <Text style={styles.Text_158_4185}>Dropdown Menu Option</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_158_3970}>
            <View style={styles.View_158_4074}>
              <View style={styles.View_158_4075} />
              <View style={styles.View_158_4076} />
              <View style={styles.View_158_4077}>
                <Text style={styles.Text_158_4077}>Dropdown Menu Option</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_158_3862}>
            <View style={styles.View_158_3966}>
              <View style={styles.View_158_3967} />
              <View style={styles.View_158_3968} />
              <View style={styles.View_158_3969}>
                <Text style={styles.Text_158_3969}>Dropdown Menu Option</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_158_3754}>
            <View style={styles.View_158_3858}>
              <View style={styles.View_158_3859} />
              <View style={styles.View_158_3860} />
              <View style={styles.View_158_3861}>
                <Text style={styles.Text_158_3861}>Dropdown Menu Option</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_158_3646}>
            <View style={styles.View_158_3750}>
              <View style={styles.View_158_3751} />
              <View style={styles.View_158_3752} />
              <View style={styles.View_158_3753}>
                <Text style={styles.Text_158_3753}>Dropdown Menu Option</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_158_3538}>
            <View style={styles.View_158_3642}>
              <View style={styles.View_158_3643} />
              <View style={styles.View_158_3644} />
              <View style={styles.View_158_3645}>
                <Text style={styles.Text_158_3645}>Dropdown Menu Option</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f78e/1942/ff514918bfc623a2d0e45a7fa46b8e8d"
        }}
        style={styles.ImageBackground_176_4312}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c18a/4cb3/1a2ef596e6e84c39d4d11e20713cec5b"
        }}
        style={styles.ImageBackground_176_4313}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_157_3104: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("17.21311475409836%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I157_3104_12_9: {
    flexGrow: 1,
    width: wp("43.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.133333333333333%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I157_3104_12_9: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_157_3105: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0666666666666667%"),
    top: hp("6.0109289617486334%")
  },
  ImageBackground_157_3106: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666668%"),
    top: hp("7.923497267759563%")
  },
  ImageBackground_157_3107: {
    width: wp("5.447619120279948%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("8.469945355191257%")
  },
  TouchableOpacity_157_3108: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("40.30054644808743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_157_3112: {
    width: wp("93.60000000000001%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("33.87978142076503%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I157_3112_111_1503: {
    flexGrow: 1,
    width: wp("93.60000000000001%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I157_3112_111_1504: {
    width: wp("93.60000000000001%"),
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
  ImageBackground_I157_3112_111_1505: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%"),
    top: hp("2.5956284153005456%")
  },
  View_I157_3112_111_1506: {
    width: wp("44%"),
    minWidth: wp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_I157_3112_111_1506: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_157_3113: {
    width: wp("40.266666666666666%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("86.47540983606558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_157_3114: {
    width: wp("40.266666666666666%"),
    height: hp("7.103825136612022%"),
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
  View_157_3115: {
    width: wp("26.0889404296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.159374999999999%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_157_3115: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  TouchableOpacity_157_3116: {
    width: wp("40.266666666666666%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%"),
    top: hp("86.47540983606558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_157_3117: {
    width: wp("40.266666666666666%"),
    height: hp("7.103825136612022%"),
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
  View_157_3118: {
    width: wp("26.0889404296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.159375000000004%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_157_3118: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_157_3119: {
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
  View_I157_3119_12_141: {
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
  View_I157_3119_12_142: {
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
  View_I157_3119_12_143: {
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
  ImageBackground_I157_3119_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I157_3119_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31878361936475397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I157_3119_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I157_3119_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18217159750683054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.71145833333334%")
  },
  View_I157_3119_12_151: {
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
  ImageBackground_I157_3119_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09105244620901631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17812500000000853%")
  },
  View_I157_3119_12_157: {
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
  View_I157_3119_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08854166666666607%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I157_3119_12_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_158_3052: {
    width: wp("84.53333333333333%"),
    height: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("39.89071038251366%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4709: {
    flexGrow: 1,
    width: wp("84.53333333333333%"),
    height: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4710: {
    width: wp("84.53333333333333%"),
    height: hp("25.683060109289617%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_158_3054: {
    flexGrow: 1,
    width: wp("84.53333333333333%"),
    height: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_158_3055: {
    flexGrow: 1,
    width: wp("84.53333333333333%"),
    height: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_158_4510: {
    flexGrow: 1,
    width: wp("84.53333333333333%"),
    height: hp("25.683060109289617%"),
    minHeight: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4614: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4615: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_158_4616: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("6.830601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  View_158_4617: {
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("2.4590163934426172%"),
    justifyContent: "flex-start"
  },
  Text_158_4617: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_4402: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666616%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4506: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4507: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_158_4508: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("6.830601092896181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  View_158_4509: {
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_158_4509: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_4294: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666616%"),
    top: hp("14.617486338797818%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4398: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4399: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_158_4400: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("6.830601092896167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  View_158_4401: {
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_158_4401: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_4186: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666616%"),
    top: hp("21.584699453551913%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4290: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4291: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_158_4292: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("6.830601092896167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  View_158_4293: {
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("2.4590163934426315%"),
    justifyContent: "flex-start"
  },
  Text_158_4293: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_4078: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666616%"),
    top: hp("28.551912568306022%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4182: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4183: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_158_4184: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("6.83060109289616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  View_158_4185: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("2.45901639344261%"),
    justifyContent: "flex-start"
  },
  Text_158_4185: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_3970: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666616%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4074: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4075: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_158_4076: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("6.830601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  View_158_4077: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_158_4077: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_3862: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666616%"),
    top: hp("42.48633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_3966: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_3967: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_158_3968: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("6.830601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  View_158_3969: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_158_3969: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_3754: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666616%"),
    top: hp("49.4535519125683%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_3858: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_3859: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_158_3860: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("6.830601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  View_158_3861: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_158_3861: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_3646: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666616%"),
    top: hp("56.4207650273224%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_3750: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_3751: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_158_3752: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("6.830601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  View_158_3753: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_158_3753: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_3538: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666616%"),
    top: hp("63.387978142076506%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_3642: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_3643: {
    width: wp("84%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_158_3644: {
    width: wp("84%"),
    height: hp("0.1366120218579235%"),
    top: hp("6.830601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  View_158_3645: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333332%"),
    top: hp("2.45901639344261%"),
    justifyContent: "flex-start"
  },
  Text_158_3645: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_176_4312: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("42.07650273224044%"),
    minHeight: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("110.92896174863387%")
  },
  ImageBackground_176_4313: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("42.07650273224044%"),
    minHeight: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.06666666666666%"),
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
