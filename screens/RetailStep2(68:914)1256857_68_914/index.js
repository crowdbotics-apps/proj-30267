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
      <View style={styles.View_68_915} />
      <View style={styles.View_68_916}>
        <View style={styles.View_I68_916_12_9}>
          <Text style={styles.Text_I68_916_12_9}>User Verification</Text>
        </View>
      </View>
      <View style={styles.View_68_920}>
        <View style={styles.View_I68_920_24_62}>
          <View style={styles.View_I68_920_24_63} />
          <View style={styles.View_I68_920_24_64}>
            <Text style={styles.Text_I68_920_24_64}>Full Name</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_69_970}>
        <View style={styles.View_I69_970_40_484} />
        <View style={styles.View_I69_970_40_485}>
          <Text style={styles.Text_I69_970_40_485}>mm/dd/yyyy</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afc/9a26/4704239820e3f03fdc7bab815dbeb8ab"
          }}
          style={styles.ImageBackground_I69_970_40_486}
        />
      </View>
      <View style={styles.View_71_965}>
        <Text style={styles.Text_71_965}>DOB</Text>
      </View>
      <View style={styles.View_71_966}>
        <View style={styles.View_I71_966_19_95}>
          <View style={styles.View_I71_966_19_96}>
            <View style={styles.View_I71_966_19_97}>
              <Text style={styles.Text_I71_966_19_97}>Nationality</Text>
            </View>
            <View style={styles.View_I71_966_19_98} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I71_966_19_99}
            />
            <View style={styles.View_I71_966_19_100}>
              <Text style={styles.Text_I71_966_19_100}>Typing|</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I71_966_19_89}>
          <View style={styles.View_I71_966_19_90}>
            <View style={styles.View_I71_966_19_92} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I71_966_19_93}
            />
            <View style={styles.View_I71_966_19_94}>
              <Text style={styles.Text_I71_966_19_94}>Placeholder text...</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I71_966_19_83}>
          <View style={styles.View_I71_966_19_84}>
            <View style={styles.View_I71_966_19_86} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I71_966_19_87}
            />
            <View style={styles.View_I71_966_19_88}>
              <Text style={styles.Text_I71_966_19_88}>Select...</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_68_921}>
        <View style={styles.View_I68_921_19_95}>
          <View style={styles.View_I68_921_19_96}>
            <View style={styles.View_I68_921_19_97}>
              <Text style={styles.Text_I68_921_19_97}>
                Country of Residence
              </Text>
            </View>
            <View style={styles.View_I68_921_19_98} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I68_921_19_99}
            />
            <View style={styles.View_I68_921_19_100}>
              <Text style={styles.Text_I68_921_19_100}>Typing|</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I68_921_19_89}>
          <View style={styles.View_I68_921_19_90}>
            <View style={styles.View_I68_921_19_92} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I68_921_19_93}
            />
            <View style={styles.View_I68_921_19_94}>
              <Text style={styles.Text_I68_921_19_94}>Placeholder text...</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I68_921_19_83}>
          <View style={styles.View_I68_921_19_84}>
            <View style={styles.View_I68_921_19_86} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I68_921_19_87}
            />
            <View style={styles.View_I68_921_19_88}>
              <Text style={styles.Text_I68_921_19_88}>Select...</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_179_4612}
      />
      <View style={styles.View_179_4615}>
        <View style={styles.View_179_4616} />
        <View style={styles.View_179_4617}>
          <Text style={styles.Text_179_4617}>BACK</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_179_4618}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("79_1020"))
        }
      >
        <View style={styles.View_179_4619} />
        <View style={styles.View_179_4620}>
          <Text style={styles.Text_179_4620}>next</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_68_923}>
        <View style={styles.View_I68_923_12_141}>
          <View style={styles.View_I68_923_12_142}>
            <View style={styles.View_I68_923_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I68_923_12_144}
            />
            <View style={styles.View_I68_923_12_145} />
          </View>
          <View style={styles.View_I68_923_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I68_923_12_147}
            />
          </View>
          <View style={styles.View_I68_923_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I68_923_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I68_923_12_157}>
          <View style={styles.View_I68_923_12_158}>
            <Text style={styles.Text_I68_923_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_68_915: {
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
  View_68_916: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("14.071038251366119%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_916_12_9: {
    flexGrow: 1,
    width: wp("77.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.27322404371584597%"),
    justifyContent: "center"
  },
  Text_I68_916_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_68_920: {
    width: wp("91.46666666666667%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("27.595628415300546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_920_24_62: {
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
  View_I68_920_24_63: {
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
  View_I68_920_24_64: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109289%"),
    justifyContent: "flex-start"
  },
  Text_I68_920_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_69_970: {
    width: wp("91.46666666666667%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("40.84699453551913%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I69_970_40_484: {
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
  View_I69_970_40_485: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_I69_970_40_485: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I69_970_40_486: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666665%"),
    top: hp("1.775956284152997%")
  },
  View_71_965: {
    width: wp("7.466666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("36.74863387978142%"),
    justifyContent: "flex-start"
  },
  Text_71_965: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_966: {
    width: wp("91.46666666666667%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("52.86885245901639%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I71_966_19_95: {
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
  View_I71_966_19_96: {
    width: wp("91.46666666666667%"),
    height: hp("10.655737704918032%"),
    top: hp("-0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I71_966_19_97: {
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
  Text_I71_966_19_97: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I71_966_19_98: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(63, 162, 247, 1)",
    borderWidth: 1
  },
  ImageBackground_I71_966_19_99: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("6.557377049180332%")
  },
  View_I71_966_19_100: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("5.73770491803279%"),
    justifyContent: "flex-start"
  },
  Text_I71_966_19_100: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I71_966_19_89: {
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
  View_I71_966_19_90: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I71_966_19_92: {
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
  ImageBackground_I71_966_19_93: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("2.4590163934426243%")
  },
  View_I71_966_19_94: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I71_966_19_94: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I71_966_19_83: {
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
  View_I71_966_19_84: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I71_966_19_86: {
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
  ImageBackground_I71_966_19_87: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("2.4590163934426243%")
  },
  View_I71_966_19_88: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I71_966_19_88: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_921: {
    width: wp("91.46666666666667%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("69.39890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_921_19_95: {
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
  View_I68_921_19_96: {
    width: wp("91.46666666666667%"),
    height: hp("10.655737704918032%"),
    top: hp("-0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_921_19_97: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I68_921_19_97: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I68_921_19_98: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(63, 162, 247, 1)",
    borderWidth: 1
  },
  ImageBackground_I68_921_19_99: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("6.557377049180332%")
  },
  View_I68_921_19_100: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("5.737704918032804%"),
    justifyContent: "flex-start"
  },
  Text_I68_921_19_100: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I68_921_19_89: {
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
  View_I68_921_19_90: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_921_19_92: {
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
  ImageBackground_I68_921_19_93: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("2.45901639344261%")
  },
  View_I68_921_19_94: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I68_921_19_94: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I68_921_19_83: {
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
  View_I68_921_19_84: {
    width: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I68_921_19_86: {
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
  ImageBackground_I68_921_19_87: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    top: hp("2.45901639344261%")
  },
  View_I68_921_19_88: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I68_921_19_88: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_179_4612: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("4.371584699453552%")
  },
  View_179_4615: {
    width: wp("36%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("92.07650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_179_4616: {
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
  View_179_4617: {
    width: wp("23.32455037434896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_179_4617: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  TouchableOpacity_179_4618: {
    width: wp("36%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.93333333333334%"),
    top: hp("92.07650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_179_4619: {
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
  View_179_4620: {
    width: wp("23.32455037434896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3999999999999915%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_179_4620: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_68_923: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I68_923_12_141: {
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
  View_I68_923_12_142: {
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
  View_I68_923_12_143: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0.04553873030865763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I68_923_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I68_923_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187627740245049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I68_923_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I68_923_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215075216658105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111979166666629%")
  },
  View_I68_923_12_151: {
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
  ImageBackground_I68_923_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09107329154926536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17786458333333144%")
  },
  View_I68_923_12_157: {
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
  View_I68_923_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0888020833333325%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I68_923_12_158: {
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
