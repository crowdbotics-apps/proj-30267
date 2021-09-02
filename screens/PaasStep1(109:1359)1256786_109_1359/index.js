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
      <View style={styles.View_109_1360} />
      <View style={styles.View_109_1374}>
        <View style={styles.View_I109_1374_82_1018} />
      </View>
      <View style={styles.View_109_1361}>
        <View style={styles.View_I109_1361_12_9}>
          <Text style={styles.Text_I109_1361_12_9}>PaaS Confirmation</Text>
        </View>
      </View>
      <View style={styles.View_111_1519}>
        <View source={{ uri: "null" }} style={styles.View_I111_1519_54_885} />
        <View style={styles.View_I111_1519_54_886}>
          <Text style={styles.Text_I111_1519_54_886}>
            How many clients have you got?
          </Text>
        </View>
      </View>
      <View style={styles.View_111_1486}>
        <View style={styles.View_111_1503}>
          <View style={styles.View_111_1504} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
            }}
            style={styles.ImageBackground_111_1505}
          />
          <View style={styles.View_111_1506}>
            <Text style={styles.Text_111_1506}>Select...</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_111_1523}>
        <View source={{ uri: "null" }} style={styles.View_I111_1523_54_885} />
        <View style={styles.View_I111_1523_54_886}>
          <Text style={styles.Text_I111_1523_54_886}>
            What is your client’s average monthly turnover?
          </Text>
        </View>
      </View>
      <View style={styles.View_113_1467}>
        <View source={{ uri: "null" }} style={styles.View_I113_1467_54_885} />
        <View style={styles.View_I113_1467_54_886}>
          <Text style={styles.Text_I113_1467_54_886}>
            Brief description about nature of your client’s activities?
          </Text>
        </View>
      </View>
      <View style={styles.View_111_1527}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50d9/bbb9/d26d7d9069e0d9bd6151d999bdfc6a6c"
          }}
          style={styles.ImageBackground_I111_1527_54_885}
        />
        <View style={styles.View_I111_1527_54_886}>
          <Text text="" style={styles.Text_I111_1527_54_886} />
        </View>
      </View>
      <View style={styles.View_111_1531}>
        <View source={{ uri: "null" }} style={styles.View_I111_1531_54_885} />
        <View style={styles.View_I111_1531_54_886}>
          <Text style={styles.Text_I111_1531_54_886}>
            Are any of your client’s national and/or resident of any of these
            countries?
          </Text>
        </View>
      </View>
      <View style={styles.View_112_1450}>
        <View style={styles.View_I112_1450_111_1503}>
          <View style={styles.View_I112_1450_111_1504} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
            }}
            style={styles.ImageBackground_I112_1450_111_1505}
          />
          <View style={styles.View_I112_1450_111_1506}>
            <Text style={styles.Text_I112_1450_111_1506}>Select...</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_113_1434}>
        <View style={styles.View_113_1451}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea06/71fa/a8f8ea9832895915a9e7b966db5cd399"
            }}
            style={styles.ImageBackground_113_1452}
          />
          <View style={styles.View_113_1453}>
            <Text style={styles.Text_113_1453}>(minimum 20 words)</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b35/b4c9/d4c2bfe48a284d6475d3802a112214ce"
            }}
            style={styles.ImageBackground_113_1454}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_109_1367}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("117_1459"))
        }
      >
        <View style={styles.View_109_1368} />
        <View style={styles.View_109_1369}>
          <Text style={styles.Text_109_1369}>submit</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_179_4629}
      />
      <View style={styles.View_109_1375}>
        <View style={styles.View_I109_1375_12_141}>
          <View style={styles.View_I109_1375_12_142}>
            <View style={styles.View_I109_1375_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I109_1375_12_144}
            />
            <View style={styles.View_I109_1375_12_145} />
          </View>
          <View style={styles.View_I109_1375_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I109_1375_12_147}
            />
          </View>
          <View style={styles.View_I109_1375_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I109_1375_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I109_1375_12_157}>
          <View style={styles.View_I109_1375_12_158}>
            <Text style={styles.Text_I109_1375_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("128.96174863387978%") },
  View_109_1360: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("128.96174863387978%"),
    minHeight: hp("128.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_109_1374: {
    width: wp("1.0666666666666667%"),
    height: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.86666666666667%"),
    top: hp("47.13114754098361%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I109_1374_82_1018: {
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
  View_109_1361: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    top: hp("11.475409836065573%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I109_1361_12_9: {
    flexGrow: 1,
    width: wp("59.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I109_1361_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_111_1519: {
    width: wp("92.32105305989583%"),
    height: hp("6.777898340277333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0666666666666667%"),
    top: hp("22.404371584699454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I111_1519_54_885: {
    flexGrow: 1,
    width: wp("92.29785970052083%"),
    height: hp("0.08391976519360568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0234375%"),
    top: hp("6.693989071038249%")
  },
  View_I111_1519_54_886: {
    flexGrow: 1,
    width: wp("61.60842285156251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.272395833333333%"),
    top: hp("1.6633580942622963%"),
    justifyContent: "flex-start"
  },
  Text_I111_1519_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_1486: {
    width: wp("93.60000000000001%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    top: hp("30.87431693989071%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_111_1503: {
    flexGrow: 1,
    width: wp("93.60000000000001%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_111_1504: {
    width: wp("93.60000000000001%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  ImageBackground_111_1505: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.39999999999999%"),
    top: hp("2.0491803278688465%")
  },
  View_111_1506: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999997%"),
    top: hp("1.3661202185792334%"),
    justifyContent: "flex-start"
  },
  Text_111_1506: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_1523: {
    width: wp("92.32105305989583%"),
    height: hp("6.777898340277333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0666666666666667%"),
    top: hp("40.43715846994536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I111_1523_54_885: {
    flexGrow: 1,
    width: wp("92.29785970052083%"),
    height: hp("0.08391976519360568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0234375%"),
    top: hp("6.693989071038253%")
  },
  View_I111_1523_54_886: {
    flexGrow: 1,
    width: wp("90.94171549479167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.272395833333333%"),
    top: hp("1.6366760587431628%"),
    justifyContent: "flex-start"
  },
  Text_I111_1523_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1467: {
    width: wp("92.32105305989583%"),
    height: hp("6.777898340277333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0666666666666667%"),
    top: hp("80.32786885245902%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I113_1467_54_885: {
    flexGrow: 1,
    width: wp("92.29785970052083%"),
    height: hp("0.08391976519360568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0234375%"),
    top: hp("6.693989071038246%")
  },
  View_I113_1467_54_886: {
    flexGrow: 1,
    width: wp("86.68309733072917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.272395833333333%"),
    top: hp("1.6405449538934391%"),
    justifyContent: "flex-start"
  },
  Text_I113_1467_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_1527: {
    width: wp("92.76800944010417%"),
    height: hp("6.778304824412194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("46.72131147540984%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I111_1527_54_885: {
    flexGrow: 1,
    width: wp("92.74481608072917%"),
    height: hp("0.08432615161593494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0234375%"),
    top: hp("6.693989071038246%")
  },
  View_I111_1527_54_886: {
    flexGrow: 1,
    width: wp("0.008519062399864196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.272395833333333%"),
    top: hp("1.7197905993852416%"),
    justifyContent: "flex-start"
  },
  Text_I111_1527_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_1531: {
    width: wp("92.32105305989583%"),
    height: hp("6.777898340277333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0666666666666667%"),
    top: hp("58.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I111_1531_54_885: {
    flexGrow: 1,
    width: wp("92.29785970052083%"),
    height: hp("0.08391976519360568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0234375%"),
    top: hp("6.693989071038253%")
  },
  View_I111_1531_54_886: {
    flexGrow: 1,
    width: wp("90.41642252604166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.272395833333333%"),
    top: hp("1.6372096994535568%"),
    justifyContent: "flex-start"
  },
  Text_I111_1531_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_1450: {
    width: wp("93.86666666666666%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("69.67213114754098%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I112_1450_111_1503: {
    flexGrow: 1,
    width: wp("93.86666666666666%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I112_1450_111_1504: {
    width: wp("93.86666666666666%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  ImageBackground_I112_1450_111_1505: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666666%"),
    top: hp("2.0491803278688536%")
  },
  View_I112_1450_111_1506: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_I112_1450_111_1506: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_1434: {
    width: wp("93.06666666666666%"),
    height: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("88.3879781420765%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_1451: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_113_1452: {
    width: wp("93.06666666666666%"),
    height: hp("15.710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_113_1453: {
    width: wp("38.181193033854164%"),
    top: hp("13.114754098360649%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666666%"),
    justifyContent: "flex-start"
  },
  Text_113_1453: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_1454: {
    width: wp("2.556778971354167%"),
    height: hp("0.9562841530054645%"),
    top: hp("13.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.63489583333333%")
  },
  TouchableOpacity_109_1367: {
    width: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("112.29508196721312%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_109_1368: {
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
  View_109_1369: {
    width: wp("18.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333334%"),
    top: hp("2.0491803278688394%"),
    justifyContent: "center"
  },
  Text_109_1369: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  ImageBackground_179_4629: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("4.371584699453552%")
  },
  View_109_1375: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I109_1375_12_141: {
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
  View_I109_1375_12_142: {
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
  View_I109_1375_12_143: {
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
  ImageBackground_I109_1375_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I109_1375_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31871691427595605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I109_1375_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I109_1375_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18210489241803263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7109375%")
  },
  View_I109_1375_12_151: {
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
  ImageBackground_I109_1375_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09111915129781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17760416666666856%")
  },
  View_I109_1375_12_157: {
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
  View_I109_1375_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08906249999999982%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I109_1375_12_158: {
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
