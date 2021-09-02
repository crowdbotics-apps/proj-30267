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
      <View style={styles.View_98_1421} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_179_4627}
      />
      <View style={styles.View_98_1422}>
        <View style={styles.View_I98_1422_12_9}>
          <Text style={styles.Text_I98_1422_12_9}>Document Verification</Text>
        </View>
      </View>
      <View style={styles.View_99_1318} />
      <View style={styles.View_102_1306}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0c/e4e4/cfcad8d63653c68569b5086ab2a26763"
          }}
          style={styles.ImageBackground_I102_1306_54_885}
        />
        <View style={styles.View_I102_1306_54_886}>
          <Text style={styles.Text_I102_1306_54_886}>
            Business Registration/Incorporation Licence
          </Text>
        </View>
      </View>
      <View style={styles.View_103_1329}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0c/e4e4/cfcad8d63653c68569b5086ab2a26763"
          }}
          style={styles.ImageBackground_I103_1329_54_885}
        />
        <View style={styles.View_I103_1329_54_886}>
          <Text style={styles.Text_I103_1329_54_886}>
            Address Proof(optional)
          </Text>
        </View>
      </View>
      <View style={styles.View_103_1337}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0c/e4e4/cfcad8d63653c68569b5086ab2a26763"
          }}
          style={styles.ImageBackground_I103_1337_54_885}
        />
        <View style={styles.View_I103_1337_54_886}>
          <Text style={styles.Text_I103_1337_54_886}>
            Additional Supporting Document (optional)
          </Text>
        </View>
      </View>
      <View style={styles.View_103_1321}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e0c/e4e4/cfcad8d63653c68569b5086ab2a26763"
          }}
          style={styles.ImageBackground_I103_1321_54_885}
        />
        <View style={styles.View_I103_1321_54_886}>
          <Text style={styles.Text_I103_1321_54_886}>
            Extract from Company Registry/Legal Entity Registry(up-to-date)
          </Text>
        </View>
      </View>
      <View style={styles.View_103_1317}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b5e/bb4f/87d7f7d2432c76cb3f5d275ea82092cc"
          }}
          style={styles.ImageBackground_103_1318}
        />
        <View style={styles.View_103_1319}>
          <Text style={styles.Text_103_1319}>Attach Documents</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea07/1b81/485954e92a21246df4894b74a086f5a2"
          }}
          style={styles.ImageBackground_77_1014}
        />
      </View>
      <View style={styles.View_103_1333}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b5e/bb4f/87d7f7d2432c76cb3f5d275ea82092cc"
          }}
          style={styles.ImageBackground_103_1334}
        />
        <View style={styles.View_103_1335}>
          <Text style={styles.Text_103_1335}>Attach Documents</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea07/1b81/485954e92a21246df4894b74a086f5a2"
          }}
          style={styles.ImageBackground_103_1336}
        />
      </View>
      <View style={styles.View_103_1342}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b5e/bb4f/87d7f7d2432c76cb3f5d275ea82092cc"
          }}
          style={styles.ImageBackground_103_1343}
        />
        <View style={styles.View_103_1344}>
          <Text style={styles.Text_103_1344}>Attach Documents</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea07/1b81/485954e92a21246df4894b74a086f5a2"
          }}
          style={styles.ImageBackground_103_1345}
        />
      </View>
      <View style={styles.View_103_1325}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b5e/bb4f/87d7f7d2432c76cb3f5d275ea82092cc"
          }}
          style={styles.ImageBackground_103_1326}
        />
        <View style={styles.View_103_1327}>
          <Text style={styles.Text_103_1327}>Attach Documents</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea07/1b81/485954e92a21246df4894b74a086f5a2"
          }}
          style={styles.ImageBackground_103_1328}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_98_1428}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("171_4001"))
        }
      >
        <View style={styles.View_98_1429} />
        <View style={styles.View_98_1430}>
          <Text style={styles.Text_98_1430}>CONTINUE</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_103_1346}>
        <View style={styles.View_I103_1346_82_1018} />
      </View>
      <View style={styles.View_98_1431}>
        <View style={styles.View_I98_1431_12_141}>
          <View style={styles.View_I98_1431_12_142}>
            <View style={styles.View_I98_1431_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I98_1431_12_144}
            />
            <View style={styles.View_I98_1431_12_145} />
          </View>
          <View style={styles.View_I98_1431_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I98_1431_12_147}
            />
          </View>
          <View style={styles.View_I98_1431_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I98_1431_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I98_1431_12_157}>
          <View style={styles.View_I98_1431_12_158}>
            <Text style={styles.Text_I98_1431_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("175.95628415300547%") },
  View_98_1421: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("175.95628415300547%"),
    minHeight: hp("175.95628415300547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_179_4627: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("4.371584699453552%")
  },
  View_98_1422: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("14.89071038251366%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1422_12_9: {
    flexGrow: 1,
    width: wp("71.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475432%"),
    justifyContent: "center"
  },
  Text_I98_1422_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_99_1318: {
    width: wp("72.8%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("15.437158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_102_1306: {
    width: wp("92.32105305989583%"),
    height: hp("6.777898340277333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("26.366120218579237%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I102_1306_54_885: {
    flexGrow: 1,
    width: wp("92.29785970052083%"),
    height: hp("0.08391974890818361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.023437499999999556%"),
    top: hp("6.693989071038249%")
  },
  View_I102_1306_54_886: {
    flexGrow: 1,
    width: wp("84.00839029947916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2723958333333325%"),
    top: hp("1.643013042178957%"),
    justifyContent: "flex-start"
  },
  Text_I102_1306_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_103_1329: {
    width: wp("92.32105305989583%"),
    height: hp("6.777898340277333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("81.28415300546447%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I103_1329_54_885: {
    flexGrow: 1,
    width: wp("92.29785970052083%"),
    height: hp("0.08391980590716086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0234375%"),
    top: hp("6.69398907103826%")
  },
  View_I103_1329_54_886: {
    flexGrow: 1,
    width: wp("44.80845133463542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.272395833333333%"),
    top: hp("1.678633559597003%"),
    justifyContent: "flex-start"
  },
  Text_I103_1329_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_103_1337: {
    width: wp("92.32105305989583%"),
    height: hp("6.777898340277333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("109.97267759562841%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I103_1337_54_885: {
    flexGrow: 1,
    width: wp("92.29785970052083%"),
    height: hp("0.08391980590716086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.023437500000000444%"),
    top: hp("6.69398907103826%")
  },
  View_I103_1337_54_886: {
    flexGrow: 1,
    width: wp("82.9417236328125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.272395833333334%"),
    top: hp("1.6440136185109395%"),
    justifyContent: "flex-start"
  },
  Text_I103_1337_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_103_1321: {
    width: wp("92.32105305989583%"),
    height: hp("6.777898340277333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("54.09836065573771%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I103_1321_54_885: {
    flexGrow: 1,
    width: wp("92.29785970052083%"),
    height: hp("0.08391970005191741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0234375%"),
    top: hp("6.693989071038246%")
  },
  View_I103_1321_54_886: {
    flexGrow: 1,
    width: wp("84.81643066406251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.272395833333333%"),
    top: hp("1.6422792862021893%"),
    justifyContent: "flex-start"
  },
  Text_I103_1321_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_103_1317: {
    width: wp("52.53333333333333%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000002%"),
    top: hp("42.07650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_103_1318: {
    width: wp("52.53333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_103_1319: {
    width: wp("40.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_103_1319: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_77_1014: {
    width: wp("3.337621815999349%"),
    height: hp("3.0433321259712263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666664%"),
    top: hp("1.5027322404371546%")
  },
  View_103_1333: {
    width: wp("52.53333333333333%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000002%"),
    top: hp("97.54098360655738%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_103_1334: {
    width: wp("52.53333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_103_1335: {
    width: wp("40.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_103_1335: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_103_1336: {
    width: wp("3.337621815999349%"),
    height: hp("3.0433321259712263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666664%"),
    top: hp("1.5027322404371688%")
  },
  View_103_1342: {
    width: wp("52.53333333333333%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000002%"),
    top: hp("126.22950819672131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_103_1343: {
    width: wp("52.53333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_103_1344: {
    width: wp("40.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_103_1344: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_103_1345: {
    width: wp("3.337621815999349%"),
    height: hp("3.0433321259712263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666664%"),
    top: hp("1.5027322404371546%")
  },
  View_103_1325: {
    width: wp("52.53333333333333%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000002%"),
    top: hp("70.3551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_103_1326: {
    width: wp("52.53333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_103_1327: {
    width: wp("40.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_103_1327: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_103_1328: {
    width: wp("3.337621815999349%"),
    height: hp("3.0433321259712263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666664%"),
    top: hp("1.5027322404371688%")
  },
  TouchableOpacity_98_1428: {
    width: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("147.1311475409836%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_98_1429: {
    width: wp("91.46666666666667%"),
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
  View_98_1430: {
    width: wp("25.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.876562500000006%"),
    top: hp("2.185792349726796%"),
    justifyContent: "center"
  },
  Text_98_1430: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_103_1346: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("52.459016393442624%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.53333333333333%"),
    top: hp("54.09836065573771%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I103_1346_82_1018: {
    flexGrow: 1,
    width: wp("1.0666666666666667%"),
    height: hp("52.459016393442624%"),
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
  View_98_1431: {
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
  View_I98_1431_12_141: {
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
  View_I98_1431_12_142: {
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
  View_I98_1431_12_143: {
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
  ImageBackground_I98_1431_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I98_1431_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31878361936475397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I98_1431_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I98_1431_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18217159750683054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7109375%")
  },
  View_I98_1431_12_151: {
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
  ImageBackground_I98_1431_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09105244620901631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17760416666666856%")
  },
  View_I98_1431_12_157: {
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
  View_I98_1431_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08906249999999982%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I98_1431_12_158: {
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
