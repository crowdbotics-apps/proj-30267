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
      <View style={styles.View_158_4783}>
        <View style={styles.View_I158_4783_12_9}>
          <Text style={styles.Text_I158_4783_12_9}>Choose Benificiary</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_158_4784}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d83/45bb/2dbd92e178b38ed129c1b9171bc74205"
        }}
        style={styles.ImageBackground_158_4785}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10b7/d2ca/90cbfcf4468ae814ae396ec876b7af00"
        }}
        style={styles.ImageBackground_158_4786}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_158_4787}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("33_209"))
        }
      />
      <View style={styles.View_158_4789}>
        <View style={styles.View_158_4790} />
        <View style={styles.View_158_4791}>
          <Text style={styles.Text_158_4791}>back</Text>
        </View>
      </View>
      <View style={styles.View_158_4792}>
        <View style={styles.View_158_4793} />
        <View style={styles.View_158_4794}>
          <Text style={styles.Text_158_4794}>NEXT</Text>
        </View>
      </View>
      <View style={styles.View_158_4795}>
        <View style={styles.View_I158_4795_12_141}>
          <View style={styles.View_I158_4795_12_142}>
            <View style={styles.View_I158_4795_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I158_4795_12_144}
            />
            <View style={styles.View_I158_4795_12_145} />
          </View>
          <View style={styles.View_I158_4795_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I158_4795_12_147}
            />
          </View>
          <View style={styles.View_I158_4795_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I158_4795_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I158_4795_12_157}>
          <View style={styles.View_I158_4795_12_158}>
            <Text style={styles.Text_I158_4795_12_158}>9:27</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_158_4722}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("164_3327"))
        }
      >
        <View style={styles.View_I158_4722_39_439} />
        <View style={styles.View_I158_4722_39_458}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80de/9dce/461f8552bed80bbbdc1c341c62cb6d8d"
            }}
            style={styles.ImageBackground_I158_4722_39_459}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59fe/b2db/2dc1bd10b27729dbea89abd0a8763da5"
            }}
            style={styles.ImageBackground_I158_4722_39_462}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49e2/d708/09e0419ba8d0db786e186524e27b4991"
          }}
          style={styles.ImageBackground_I158_4722_39_441}
        />
        <View style={styles.View_I158_4722_39_442}>
          <Text style={styles.Text_I158_4722_39_442}>
            Natural Person/Business
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_158_4723}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("158_4945"))
        }
      >
        <View style={styles.View_I158_4723_39_439} />
        <View style={styles.View_I158_4723_39_458}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80de/9dce/461f8552bed80bbbdc1c341c62cb6d8d"
            }}
            style={styles.ImageBackground_I158_4723_39_459}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59fe/b2db/2dc1bd10b27729dbea89abd0a8763da5"
            }}
            style={styles.ImageBackground_I158_4723_39_462}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49e2/d708/09e0419ba8d0db786e186524e27b4991"
          }}
          style={styles.ImageBackground_I158_4723_39_441}
        />
        <View style={styles.View_I158_4723_39_442}>
          <Text style={styles.Text_I158_4723_39_442}>
            Internal Marketplace to Marketplace
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_158_4925}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("164_3435"))
        }
      >
        <View style={styles.View_I158_4925_39_439} />
        <View style={styles.View_I158_4925_39_458}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80de/9dce/461f8552bed80bbbdc1c341c62cb6d8d"
            }}
            style={styles.ImageBackground_I158_4925_39_459}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59fe/b2db/2dc1bd10b27729dbea89abd0a8763da5"
            }}
            style={styles.ImageBackground_I158_4925_39_462}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49e2/d708/09e0419ba8d0db786e186524e27b4991"
          }}
          style={styles.ImageBackground_I158_4925_39_441}
        />
        <View style={styles.View_I158_4925_39_442}>
          <Text style={styles.Text_I158_4925_39_442}>
            External B2B/3rd Party
          </Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a549/4b4b/1a7c97e66a3a1619ff70b31673bcde56"
        }}
        style={styles.ImageBackground_176_4316}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_158_4783: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("15.846994535519126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I158_4783_12_9: {
    flexGrow: 1,
    width: wp("58.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13.866666666666664%"),
    top: hp("0.8196721311475379%"),
    justifyContent: "center"
  },
  Text_I158_4783_12_9: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_158_4784: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0666666666666667%"),
    top: hp("6.0109289617486334%")
  },
  ImageBackground_158_4785: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666668%"),
    top: hp("7.923497267759563%")
  },
  ImageBackground_158_4786: {
    width: wp("5.447619120279948%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("8.469945355191257%")
  },
  TouchableOpacity_158_4787: {
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
  View_158_4789: {
    width: wp("40.266666666666666%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("86.47540983606558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4790: {
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
  View_158_4791: {
    width: wp("26.0889404296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.159374999999999%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_158_4791: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_158_4792: {
    width: wp("40.266666666666666%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%"),
    top: hp("86.47540983606558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_158_4793: {
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
  View_158_4794: {
    width: wp("26.0889404296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.159375000000004%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_158_4794: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_158_4795: {
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
  View_I158_4795_12_141: {
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
  View_I158_4795_12_142: {
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
  View_I158_4795_12_143: {
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
  ImageBackground_I158_4795_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I158_4795_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31878361936475397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I158_4795_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I158_4795_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18217159750683054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.71145833333334%")
  },
  View_I158_4795_12_151: {
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
  ImageBackground_I158_4795_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09105244620901631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17812500000000853%")
  },
  View_I158_4795_12_157: {
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
  View_I158_4795_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08854166666666607%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I158_4795_12_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  TouchableOpacity_158_4722: {
    width: wp("93.06666666666666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("31.147540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I158_4722_39_439: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I158_4722_39_458: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("2.04918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I158_4722_39_459: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I158_4722_39_462: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I158_4722_39_441: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("0%")
  },
  View_I158_4722_39_442: {
    flexGrow: 1,
    width: wp("41.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("2.1857923497267713%"),
    justifyContent: "flex-start"
  },
  Text_I158_4722_39_442: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_158_4723: {
    width: wp("93.06666666666666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("45.49180327868852%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I158_4723_39_439: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I158_4723_39_458: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I158_4723_39_459: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I158_4723_39_462: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I158_4723_39_441: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("0%")
  },
  View_I158_4723_39_442: {
    flexGrow: 1,
    width: wp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_I158_4723_39_442: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_158_4925: {
    width: wp("93.06666666666666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("61.74863387978142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I158_4925_39_439: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I158_4925_39_458: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("2.0491803278688465%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I158_4925_39_459: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I158_4925_39_462: {
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I158_4925_39_441: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("0%")
  },
  View_I158_4925_39_442: {
    flexGrow: 1,
    width: wp("37.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_I158_4925_39_442: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_176_4316: {
    width: wp("176.53333333333333%"),
    minWidth: wp("176.53333333333333%"),
    height: hp("82.65027322404372%"),
    minHeight: hp("82.65027322404372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-176.53333333333333%"),
    top: hp("86.47540983606558%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
