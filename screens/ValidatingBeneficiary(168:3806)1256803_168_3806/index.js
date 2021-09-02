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
      <View style={styles.View_168_3807}>
        <View style={styles.View_I168_3807_12_9}>
          <Text style={styles.Text_I168_3807_12_9}>Transaction Process</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_168_3808}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d83/45bb/2dbd92e178b38ed129c1b9171bc74205"
        }}
        style={styles.ImageBackground_168_3809}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10b7/d2ca/90cbfcf4468ae814ae396ec876b7af00"
        }}
        style={styles.ImageBackground_168_3810}
      />
      <View style={styles.View_168_3815}>
        <Text style={styles.Text_168_3815}>Recipient Name</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8306/3570/59a74ed2874c4a92d909866db06a0cad"
        }}
        style={styles.ImageBackground_168_3817}
      />
      <View style={styles.View_168_3819}>
        <View style={styles.View_I168_3819_24_62}>
          <View style={styles.View_I168_3819_24_63} />
          <View style={styles.View_I168_3819_24_64}>
            <Text style={styles.Text_I168_3819_24_64}>Nickname</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_168_3821}>
        <View style={styles.View_I168_3821_24_62}>
          <View style={styles.View_I168_3821_24_63} />
          <View style={styles.View_I168_3821_24_64}>
            <Text style={styles.Text_I168_3821_24_64}>Account Number</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_168_3823}>
        <View style={styles.View_I168_3823_24_62}>
          <View style={styles.View_I168_3823_24_63} />
          <View style={styles.View_I168_3823_24_64}>
            <Text style={styles.Text_I168_3823_24_64}>Entity Type</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_168_3825}>
        <View style={styles.View_I168_3825_24_62}>
          <View style={styles.View_I168_3825_24_63} />
          <View style={styles.View_I168_3825_24_64}>
            <Text style={styles.Text_I168_3825_24_64}>Bank Country/Region</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_168_3831}>
        <View style={styles.View_I168_3831_12_141}>
          <View style={styles.View_I168_3831_12_142}>
            <View style={styles.View_I168_3831_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I168_3831_12_144}
            />
            <View style={styles.View_I168_3831_12_145} />
          </View>
          <View style={styles.View_I168_3831_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I168_3831_12_147}
            />
          </View>
          <View style={styles.View_I168_3831_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I168_3831_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I168_3831_12_157}>
          <View style={styles.View_I168_3831_12_158}>
            <Text style={styles.Text_I168_3831_12_158}>9:27</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_168_3923}>
        <View style={styles.View_I168_3923_167_3617} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0818/5f81/a8a85aa20343f3a4a6c8c4eac56216b3"
          }}
          style={styles.ImageBackground_I168_3923_167_3618}
        />
        <View style={styles.View_I168_3923_167_3630}>
          <Text style={styles.Text_I168_3923_167_3630}>
            Validating Beneficiary.........
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51de/1e6d/988a6ba576303a638b395cc7b57e5653"
          }}
          style={styles.ImageBackground_I168_3923_167_3631}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d10e/c7ff/537bd6edefcde8f57d76485d5738c1c5"
        }}
        style={styles.ImageBackground_176_4349}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111.20218579234972%") },
  View_168_3807: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("11.612021857923498%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_3807_12_9: {
    flexGrow: 1,
    width: wp("62.133333333333326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.466666666666665%"),
    top: hp("0.8196721311475397%"),
    justifyContent: "center"
  },
  Text_I168_3807_12_9: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_168_3808: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885246%")
  },
  ImageBackground_168_3809: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.73333333333333%"),
    top: hp("6.830601092896176%")
  },
  ImageBackground_168_3810: {
    width: wp("5.447619120279948%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.2%"),
    top: hp("7.377049180327869%")
  },
  View_168_3815: {
    width: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000001%"),
    top: hp("23.770491803278688%"),
    justifyContent: "flex-start"
  },
  Text_168_3815: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_168_3817: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("23.633879781420767%")
  },
  View_168_3819: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("32.10382513661202%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_3819_24_62: {
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
  View_I168_3819_24_63: {
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
  View_I168_3819_24_64: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I168_3819_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_3821: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("74.4535519125683%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_3821_24_62: {
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
  View_I168_3821_24_63: {
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
  View_I168_3821_24_64: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_I168_3821_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_3823: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("45.76502732240437%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_3823_24_62: {
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
  View_I168_3823_24_63: {
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
  View_I168_3823_24_64: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I168_3823_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_3825: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("60.245901639344254%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_3825_24_62: {
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
  View_I168_3825_24_63: {
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
  View_I168_3825_24_64: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_I168_3825_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_3831: {
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
  View_I168_3831_12_141: {
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
  View_I168_3831_12_142: {
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
  View_I168_3831_12_143: {
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
  ImageBackground_I168_3831_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I168_3831_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31871691427595605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I168_3831_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I168_3831_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18210489241803263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.71145833333334%")
  },
  View_I168_3831_12_151: {
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
  ImageBackground_I168_3831_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09111915129781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17812500000000853%")
  },
  View_I168_3831_12_157: {
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
  View_I168_3831_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08854166666666607%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I168_3831_12_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_168_3923: {
    width: wp("85.86666666666667%"),
    height: hp("20.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("45.76502732240437%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_3923_167_3617: {
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
  ImageBackground_I168_3923_167_3618: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("2.7322404371584668%")
  },
  View_I168_3923_167_3630: {
    flexGrow: 1,
    width: wp("51.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("8.196721311475407%"),
    justifyContent: "center"
  },
  Text_I168_3923_167_3630: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I168_3923_167_3631: {
    flexGrow: 1,
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    top: hp("7.786885245901644%")
  },
  ImageBackground_176_4349: {
    width: wp("1.866666793823242%"),
    minWidth: wp("1.866666793823242%"),
    height: hp("68.30601092896174%"),
    minHeight: hp("68.30601092896174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    top: hp("111.20218579234972%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
