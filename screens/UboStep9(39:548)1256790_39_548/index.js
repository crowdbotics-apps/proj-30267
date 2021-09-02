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
      <View style={styles.View_39_549} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_179_4593}
      />
      <View style={styles.View_39_550}>
        <View style={styles.View_I39_550_12_9}>
          <Text style={styles.Text_I39_550_12_9}> UBO/Owner Verification</Text>
        </View>
      </View>
      <View style={styles.View_39_551}>
        <View style={styles.View_I39_551_24_62}>
          <View style={styles.View_I39_551_24_63} />
          <View style={styles.View_I39_551_24_64}>
            <Text style={styles.Text_I39_551_24_64}>Full Name</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_40_494}>
        <View style={styles.View_I40_494_24_62}>
          <View style={styles.View_I40_494_24_63} />
          <View style={styles.View_I40_494_24_64}>
            <Text style={styles.Text_I40_494_24_64}>Email</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_39_552}>
        <View style={styles.View_I39_552_19_95}>
          <View style={styles.View_I39_552_19_96}>
            <View style={styles.View_I39_552_19_97}>
              <Text style={styles.Text_I39_552_19_97}>Nationality</Text>
            </View>
            <View style={styles.View_I39_552_19_98} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I39_552_19_99}
            />
            <View style={styles.View_I39_552_19_100}>
              <Text style={styles.Text_I39_552_19_100}>Typing|</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I39_552_19_89}>
          <View style={styles.View_I39_552_19_90}>
            <View style={styles.View_I39_552_19_92} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I39_552_19_93}
            />
            <View style={styles.View_I39_552_19_94}>
              <Text style={styles.Text_I39_552_19_94}>Placeholder text...</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I39_552_19_83}>
          <View style={styles.View_I39_552_19_84}>
            <View style={styles.View_I39_552_19_86} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I39_552_19_87}
            />
            <View style={styles.View_I39_552_19_88}>
              <Text style={styles.Text_I39_552_19_88}>Select...</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_39_554}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("42_554"))
        }
      >
        <View style={styles.View_39_555} />
        <View style={styles.View_39_556}>
          <Text style={styles.Text_39_556}>NEXT</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_40_483}>
        <View style={styles.View_40_484} />
        <View style={styles.View_40_485}>
          <Text style={styles.Text_40_485}>mm/dd/yyyy</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afc/9a26/4704239820e3f03fdc7bab815dbeb8ab"
          }}
          style={styles.ImageBackground_40_486}
        />
      </View>
      <View style={styles.View_41_510}>
        <View style={styles.View_41_546}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0371/43b4/5d8fd12cb65f76eda9a56cda894ecf09"
            }}
            style={styles.ImageBackground_41_547}
          />
          <View style={styles.View_41_548}>
            <Text style={styles.Text_41_548}>Placeholder text...</Text>
          </View>
          <View style={styles.View_41_549}>
            <Text style={styles.Text_41_549}>Address</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_41_550}
          />
        </View>
        <View style={styles.View_41_541}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20c4/9a23/308b2368a810896f8acfb78a50c63558"
            }}
            style={styles.ImageBackground_41_542}
          />
          <View style={styles.View_41_543}>
            <Text style={styles.Text_41_543}>Placeholder text...</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_41_545}
          />
        </View>
        <View style={styles.View_41_536}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e0a/bbc5/06d8bfa7dcfe5710d63b7dc9e7086894"
            }}
            style={styles.ImageBackground_41_537}
          />
          <View style={styles.View_41_538}>
            <Text style={styles.Text_41_538}>Typing|</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_41_540}
          />
        </View>
        <View style={styles.View_41_531}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b3d/22c3/a87b176122410b57fa4feb369aeffe14"
            }}
            style={styles.ImageBackground_41_532}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_41_535}
          />
        </View>
      </View>
      <View style={styles.View_179_4607}>
        <View style={styles.View_179_4608} />
        <View style={styles.View_179_4609}>
          <Text style={styles.Text_179_4609}>BACK</Text>
        </View>
      </View>
      <View style={styles.View_39_561}>
        <View style={styles.View_I39_561_12_141}>
          <View style={styles.View_I39_561_12_142}>
            <View style={styles.View_I39_561_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I39_561_12_144}
            />
            <View style={styles.View_I39_561_12_145} />
          </View>
          <View style={styles.View_I39_561_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I39_561_12_147}
            />
          </View>
          <View style={styles.View_I39_561_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I39_561_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I39_561_12_157}>
          <View style={styles.View_I39_561_12_158}>
            <Text style={styles.Text_I39_561_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_39_549: {
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
  ImageBackground_179_4593: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("4.371584699453552%")
  },
  View_39_550: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66666666666667%"),
    top: hp("12.978142076502733%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I39_550_12_9: {
    flexGrow: 1,
    width: wp("77.06666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-22.933333333333337%"),
    top: hp("0.8196721311475397%"),
    justifyContent: "center"
  },
  Text_I39_550_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_39_551: {
    width: wp("91.46666666666667%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("23.770491803278688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I39_551_24_62: {
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
  View_I39_551_24_63: {
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
  View_I39_551_24_64: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109289%"),
    justifyContent: "flex-start"
  },
  Text_I39_551_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_40_494: {
    width: wp("91.46666666666667%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("60.79234972677595%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I40_494_24_62: {
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
  View_I40_494_24_63: {
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
  View_I40_494_24_64: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_I40_494_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_552: {
    width: wp("91.46666666666667%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45.08196721311475%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I39_552_19_95: {
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
  View_I39_552_19_96: {
    width: wp("91.46666666666667%"),
    height: hp("10.655737704918032%"),
    top: hp("-0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I39_552_19_97: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I39_552_19_97: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I39_552_19_98: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("4.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(63, 162, 247, 1)",
    borderWidth: 1
  },
  ImageBackground_I39_552_19_99: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("6.5573770491803245%")
  },
  View_I39_552_19_100: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("5.737704918032783%"),
    justifyContent: "flex-start"
  },
  Text_I39_552_19_100: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I39_552_19_89: {
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
  View_I39_552_19_90: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I39_552_19_92: {
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
  ImageBackground_I39_552_19_93: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("2.4590163934426243%")
  },
  View_I39_552_19_94: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I39_552_19_94: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I39_552_19_83: {
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
  View_I39_552_19_84: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I39_552_19_86: {
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
  ImageBackground_I39_552_19_87: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("2.4590163934426243%")
  },
  View_I39_552_19_88: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I39_552_19_88: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_39_554: {
    width: wp("36%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.93333333333334%"),
    top: hp("95.62841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_39_555: {
    width: wp("36%"),
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
  View_39_556: {
    width: wp("23.38763020833333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.570507812499997%"),
    top: hp("1.521676485655746%"),
    justifyContent: "center"
  },
  Text_39_556: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_40_483: {
    width: wp("91.46666666666667%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("35.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_484: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(210, 210, 210, 1)",
    borderWidth: 1
  },
  View_40_485: {
    flexGrow: 1,
    width: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_40_485: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_40_486: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666665%"),
    top: hp("1.775956284153004%")
  },
  View_41_510: {
    width: wp("90.13333333333333%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("71.99453551912568%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_41_546: {
    flexGrow: 1,
    width: wp("90.13333333333333%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_41_547: {
    width: wp("90.13333333333333%"),
    height: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  View_41_548: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666666%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_41_548: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_549: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("-0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_41_549: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_41_550: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%"),
    top: hp("15.710382513661202%")
  },
  View_41_541: {
    flexGrow: 1,
    width: wp("90.13333333333333%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_41_542: {
    width: wp("90.13333333333333%"),
    height: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  View_41_543: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666666%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_41_543: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_41_545: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%"),
    top: hp("15.710382513661202%")
  },
  View_41_536: {
    flexGrow: 1,
    width: wp("90.13333333333333%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_41_537: {
    width: wp("90.13333333333333%"),
    height: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  View_41_538: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666666%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_41_538: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_41_540: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%"),
    top: hp("15.710382513661202%")
  },
  View_41_531: {
    flexGrow: 1,
    width: wp("90.13333333333333%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_41_532: {
    width: wp("90.13333333333333%"),
    height: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  ImageBackground_41_535: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%"),
    top: hp("15.710382513661202%")
  },
  View_179_4607: {
    width: wp("36%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("95.62841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_179_4608: {
    width: wp("36%"),
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
  View_179_4609: {
    width: wp("23.32455037434896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("1.5027322404371688%"),
    justifyContent: "center"
  },
  Text_179_4609: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_39_561: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I39_561_12_141: {
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
  View_I39_561_12_142: {
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
  View_I39_561_12_143: {
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
  ImageBackground_I39_561_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I39_561_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31871691427595605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I39_561_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I39_561_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18210489241803263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111328124999972%")
  },
  View_I39_561_12_151: {
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
  ImageBackground_I39_561_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09111915129781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17779947916666572%")
  },
  View_I39_561_12_157: {
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
  View_I39_561_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08886718749999911%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I39_561_12_158: {
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
