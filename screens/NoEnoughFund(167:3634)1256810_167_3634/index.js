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
      <View style={styles.View_167_3635}>
        <View style={styles.View_I167_3635_12_9}>
          <Text style={styles.Text_I167_3635_12_9}>Transaction Process</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_167_3636}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d83/45bb/2dbd92e178b38ed129c1b9171bc74205"
        }}
        style={styles.ImageBackground_167_3637}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10b7/d2ca/90cbfcf4468ae814ae396ec876b7af00"
        }}
        style={styles.ImageBackground_167_3638}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_167_3639}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("33_209"))
        }
      />
      <View style={styles.View_167_3640}>
        <View style={styles.View_I167_3640_24_62}>
          <View style={styles.View_I167_3640_24_63} />
          <View style={styles.View_I167_3640_24_64}>
            <Text style={styles.Text_I167_3640_24_64}>Type</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_167_3641}>
        <View style={styles.View_I167_3641_24_62}>
          <View style={styles.View_I167_3641_24_63} />
          <View style={styles.View_I167_3641_24_64}>
            <Text style={styles.Text_I167_3641_24_64}>Amount</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_167_3642}>
        <View style={styles.View_I167_3642_111_1503}>
          <View style={styles.View_I167_3642_111_1504} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
            }}
            style={styles.ImageBackground_I167_3642_111_1505}
          />
          <View style={styles.View_I167_3642_111_1506}>
            <Text style={styles.Text_I167_3642_111_1506}>Currency</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_167_3643}>
        <View style={styles.View_167_3644} />
        <View style={styles.View_167_3645}>
          <Text style={styles.Text_167_3645}>back</Text>
        </View>
      </View>
      <View style={styles.View_167_3646}>
        <View style={styles.View_167_3647} />
        <View style={styles.View_167_3648}>
          <Text style={styles.Text_167_3648}>NEXT</Text>
        </View>
      </View>
      <View style={styles.View_167_3649}>
        <View style={styles.View_I167_3649_12_141}>
          <View style={styles.View_I167_3649_12_142}>
            <View style={styles.View_I167_3649_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I167_3649_12_144}
            />
            <View style={styles.View_I167_3649_12_145} />
          </View>
          <View style={styles.View_I167_3649_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I167_3649_12_147}
            />
          </View>
          <View style={styles.View_I167_3649_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I167_3649_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I167_3649_12_157}>
          <View style={styles.View_I167_3649_12_158}>
            <Text style={styles.Text_I167_3649_12_158}>9:27</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_167_3650}>
        <View style={styles.View_I167_3650_167_3617} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0818/5f81/a8a85aa20343f3a4a6c8c4eac56216b3"
          }}
          style={styles.ImageBackground_I167_3650_167_3618}
        />
        <View style={styles.View_I167_3650_167_3630}>
          <Text style={styles.Text_I167_3650_167_3630}>
            Looks like you don’t have enough fund for this transaction
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2d6/c017/34e6c678045e81366462e5e8616b6963"
        }}
        style={styles.ImageBackground_168_3674}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_167_3635: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("13.797814207650273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I167_3635_12_9: {
    flexGrow: 1,
    width: wp("62.133333333333326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.466666666666661%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I167_3635_12_9: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_167_3636: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0666666666666667%"),
    top: hp("6.0109289617486334%")
  },
  ImageBackground_167_3637: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666668%"),
    top: hp("7.923497267759563%")
  },
  ImageBackground_167_3638: {
    width: wp("5.447619120279948%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("8.469945355191257%")
  },
  TouchableOpacity_167_3639: {
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
  View_167_3640: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("27.049180327868854%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I167_3640_24_62: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I167_3640_24_63: {
    width: wp("93.06666666666666%"),
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
  View_I167_3640_24_64: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I167_3640_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_3641: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("56.830601092896174%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I167_3641_24_62: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I167_3641_24_63: {
    width: wp("93.06666666666666%"),
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
  View_I167_3641_24_64: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I167_3641_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_3642: {
    width: wp("93.60000000000001%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("41.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I167_3642_111_1503: {
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
  View_I167_3642_111_1504: {
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
  ImageBackground_I167_3642_111_1505: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%"),
    top: hp("2.5956284153005456%")
  },
  View_I167_3642_111_1506: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I167_3642_111_1506: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_3643: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("86.47540983606558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_167_3644: {
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
  View_167_3645: {
    width: wp("26.0889404296875%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.159374999999999%"),
    justifyContent: "center"
  },
  Text_167_3645: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_167_3646: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%"),
    top: hp("86.47540983606558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_167_3647: {
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
  View_167_3648: {
    width: wp("26.0889404296875%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.159375000000004%"),
    justifyContent: "center"
  },
  Text_167_3648: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_167_3649: {
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
  View_I167_3649_12_141: {
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
  View_I167_3649_12_142: {
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
  View_I167_3649_12_143: {
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
  ImageBackground_I167_3649_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I167_3649_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31871691427595605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I167_3649_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I167_3649_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18210489241803263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.71145833333334%")
  },
  View_I167_3649_12_151: {
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
  ImageBackground_I167_3649_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09111915129781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17812500000000853%")
  },
  View_I167_3649_12_157: {
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
  View_I167_3649_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08854166666666607%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I167_3649_12_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_167_3650: {
    width: wp("85.86666666666667%"),
    height: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("35.38251366120219%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I167_3650_167_3617: {
    flexGrow: 1,
    width: wp("85.86666666666667%"),
    height: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I167_3650_167_3618: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("2.7322404371584668%")
  },
  View_I167_3650_167_3630: {
    flexGrow: 1,
    width: wp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5.737704918032783%"),
    justifyContent: "center"
  },
  Text_I167_3650_167_3630: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_168_3674: {
    width: wp("5.866666666666666%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333333%"),
    top: hp("39.34426229508197%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
