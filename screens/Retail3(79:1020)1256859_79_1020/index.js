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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_179_4614}
      />
      <View style={styles.View_79_1022}>
        <View style={styles.View_I79_1022_12_9}>
          <Text style={styles.Text_I79_1022_12_9}>User Verification</Text>
        </View>
      </View>
      <View style={styles.View_73_993}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a45b/14c0/f464031d98478463a3158fe4bed92c32"
          }}
          style={styles.ImageBackground_I73_993_54_885}
        />
        <View style={styles.View_I73_993_54_886}>
          <Text style={styles.Text_I73_993_54_886}>Add Photo ID</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f77/94fb/b2e5673efaa17467a31d2e940dab8306"
        }}
        style={styles.ImageBackground_73_994}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f77/94fb/b2e5673efaa17467a31d2e940dab8306"
        }}
        style={styles.ImageBackground_80_1020}
      />
      <View style={styles.View_73_995}>
        <View style={styles.View_I73_995_49_925}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8133/ebc8/7823e3964e22e8eeeb75c613c99fb312"
            }}
            style={styles.ImageBackground_I73_995_49_926}
          />
          <View style={styles.View_I73_995_49_927}>
            <Text style={styles.Text_I73_995_49_927}>Choose File</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89ea/e6f8/0179b8621af82b1f39de5b4344901397"
          }}
          style={styles.ImageBackground_I73_995_56_885}
        />
        <View style={styles.View_I73_995_49_922}>
          <Text style={styles.Text_I73_995_49_922}>No file selected</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8133/ebc8/7823e3964e22e8eeeb75c613c99fb312"
        }}
        style={styles.ImageBackground_80_1018}
      />
      <View style={styles.View_80_1019}>
        <Text style={styles.Text_80_1019}>Click Photo</Text>
      </View>
      <View style={styles.View_73_1030}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0c/e4e4/cfcad8d63653c68569b5086ab2a26763"
          }}
          style={styles.ImageBackground_I73_1030_54_885}
        />
        <View style={styles.View_I73_1030_54_886}>
          <Text style={styles.Text_I73_1030_54_886}>Face Verification</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d976/9272/634efe8bff2414e368666e4a383cfa55"
        }}
        style={styles.ImageBackground_79_1017}
      />
      <View style={styles.View_78_1014}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/545c/2662/4e161bbc6385bbb2b8087c27a97e7065"
          }}
          style={styles.ImageBackground_I78_1014_54_885}
        />
        <View style={styles.View_I78_1014_54_886}>
          <Text style={styles.Text_I78_1014_54_886}>
            {" "}
            Address Proof (optional)
          </Text>
        </View>
      </View>
      <View style={styles.View_81_1021}>
        <View style={styles.View_81_1022} />
        <View style={styles.View_81_1027}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2aab/9518/ff520f84b99f1431f1ae72f80faaf22c"
            }}
            style={styles.ImageBackground_81_1028}
          />
          <View style={styles.View_81_1029}>
            <Text style={styles.Text_81_1029}>Choose File</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89ea/e6f8/0179b8621af82b1f39de5b4344901397"
        }}
        style={styles.ImageBackground_81_1030}
      />
      <View style={styles.View_81_1032}>
        <Text style={styles.Text_81_1032}>No File Selected</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_73_987}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("84_1017"))
        }
      >
        <View style={styles.View_73_988} />
        <View style={styles.View_73_989}>
          <Text style={styles.Text_73_989}>NEXT</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_82_1017}>
        <View style={styles.View_82_1018} />
      </View>
      <View style={styles.View_79_1032}>
        <View style={styles.View_I79_1032_12_141}>
          <View style={styles.View_I79_1032_12_142}>
            <View style={styles.View_I79_1032_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I79_1032_12_144}
            />
            <View style={styles.View_I79_1032_12_145} />
          </View>
          <View style={styles.View_I79_1032_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I79_1032_12_147}
            />
          </View>
          <View style={styles.View_I79_1032_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I79_1032_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I79_1032_12_157}>
          <View style={styles.View_I79_1032_12_158}>
            <Text style={styles.Text_I79_1032_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("200.40983606557376%") },
  ImageBackground_179_4614: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("4.371584699453552%")
  },
  View_79_1022: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("14.754098360655737%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I79_1022_12_9: {
    flexGrow: 1,
    width: wp("77.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.27322404371584774%"),
    justifyContent: "center"
  },
  Text_I79_1022_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_73_993: {
    width: wp("92.15608723958333%"),
    height: hp("6.777748253827538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("26.495849109086834%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I73_993_54_885: {
    flexGrow: 1,
    width: wp("92.13289388020833%"),
    height: hp("0.08376970317194371%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.023177083333333126%"),
    top: hp("6.693980732902155%")
  },
  View_I73_993_54_886: {
    flexGrow: 1,
    width: wp("36.2784423828125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2723958333333325%"),
    top: hp("1.6862587850601969%"),
    justifyContent: "flex-start"
  },
  Text_I73_993_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_73_994: {
    width: wp("33.49866943359375%"),
    height: hp("10.519126725327121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("39.61748633879781%")
  },
  ImageBackground_80_1020: {
    width: wp("33.49866943359375%"),
    height: hp("10.519126725327121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("135.38251366120218%")
  },
  View_73_995: {
    width: wp("66.41835530598958%"),
    height: hp("5.388233309886495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333334%"),
    top: hp("58.879781420765035%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_995_49_925: {
    flexGrow: 1,
    width: wp("32.018408203125%"),
    height: hp("5.3569559191094065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.933333333333334%"),
    top: hp("0.03758831753756198%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I73_995_49_926: {
    width: wp("32.018408203125%"),
    height: hp("5.3569559191094065%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I73_995_49_927: {
    width: wp("32.018408203125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I73_995_49_927: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I73_995_56_885: {
    flexGrow: 1,
    width: wp("32.018408203125%"),
    height: hp("5.3569559191094065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.53333333333333%"),
    top: hp("-0.0055698749146273485%")
  },
  View_I73_995_49_922: {
    flexGrow: 1,
    width: wp("29.085078938802084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666667%"),
    top: hp("-0.004852795210048555%"),
    justifyContent: "center"
  },
  Text_I73_995_49_922: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_80_1018: {
    width: wp("32.018408203125%"),
    height: hp("5.3569559191094065%"),
    top: hp("108.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%")
  },
  View_80_1019: {
    width: wp("20.533333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666667%"),
    top: hp("109.69945355191257%"),
    justifyContent: "center"
  },
  Text_80_1019: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_73_1030: {
    width: wp("92.33439941406249%"),
    height: hp("6.777910326347976%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("72.94981075766309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I73_1030_54_885: {
    flexGrow: 1,
    width: wp("92.3112060546875%"),
    height: hp("0.08393183269135938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.023177083333333126%"),
    top: hp("6.693980732902148%")
  },
  View_I73_1030_54_886: {
    flexGrow: 1,
    width: wp("44.811763509114584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2723958333333325%"),
    top: hp("1.678658574005297%"),
    justifyContent: "flex-start"
  },
  Text_I73_1030_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_79_1017: {
    width: wp("39.733333333333334%"),
    height: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("86.0655737704918%")
  },
  View_78_1014: {
    width: wp("92.60489908854167%"),
    height: hp("6.778156301362919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("122.4031041880123%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I78_1014_54_885: {
    flexGrow: 1,
    width: wp("92.58170572916666%"),
    height: hp("0.08417773442190202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.023177083333333126%"),
    top: hp("6.693972394766021%")
  },
  View_I78_1014_54_886: {
    flexGrow: 1,
    width: wp("65.61173095703124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2723958333333325%"),
    top: hp("1.6599894872779828%"),
    justifyContent: "flex-start"
  },
  Text_I78_1014_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_1021: {
    width: wp("72.8%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("154.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_81_1022: {
    flexGrow: 1,
    width: wp("72.8%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_81_1027: {
    flexGrow: 1,
    width: wp("29.599999999999998%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_81_1028: {
    width: wp("29.599999999999998%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_81_1029: {
    width: wp("29.599999999999998%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_81_1029: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_81_1030: {
    width: wp("32.018408203125%"),
    height: hp("5.3569559191094065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("154.6448087431694%")
  },
  View_81_1032: {
    width: wp("26.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.133333333333333%"),
    top: hp("156.28415300546447%"),
    justifyContent: "flex-start"
  },
  Text_81_1032: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_73_987: {
    width: wp("36.024556477864586%"),
    height: hp("7.136546067201374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("175%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_73_988: {
    width: wp("36.024556477864586%"),
    height: hp("7.136546067201374%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(143, 143, 143, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_73_989: {
    width: wp("23.373451741536456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.59010416666667%"),
    top: hp("1.5482584635416856%"),
    justifyContent: "center"
  },
  Text_73_989: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_82_1017: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    height: hp("52.732240437158474%"),
    minHeight: hp("52.732240437158474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.26666666666667%"),
    top: hp("66.12021857923497%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_82_1018: {
    flexGrow: 1,
    width: wp("2.4%"),
    height: hp("52.732240437158474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_79_1032: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I79_1032_12_141: {
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
  View_I79_1032_12_142: {
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
  View_I79_1032_12_143: {
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
  ImageBackground_I79_1032_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I79_1032_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187627740245049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I79_1032_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I79_1032_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215075216658105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111979166666629%")
  },
  View_I79_1032_12_151: {
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
  ImageBackground_I79_1032_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09107329154926536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17786458333333144%")
  },
  View_I79_1032_12_157: {
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
  View_I79_1032_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0888020833333325%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I79_1032_12_158: {
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
