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
      <View style={styles.View_12_169} />
      <TouchableOpacity
        style={styles.TouchableOpacity_12_173}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("179_4755"))
        }
      >
        <View style={styles.View_12_174} />
        <View style={styles.View_12_175}>
          <Text style={styles.Text_12_175}>next</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_19_50}>
        <View style={styles.View_19_51}>
          <View style={styles.View_19_95}>
            <View style={styles.View_19_96}>
              <View style={styles.View_19_97}>
                <Text style={styles.Text_19_97}>Select Location</Text>
              </View>
              <View style={styles.View_19_98} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfb2/08b7/7d110b2369d01d54cbaf91172d62ee36"
                }}
                style={styles.ImageBackground_19_99}
              />
              <View style={styles.View_19_100}>
                <Text style={styles.Text_19_100}>Typing|</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_19_89}>
            <View style={styles.View_19_90}>
              <View style={styles.View_19_92} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfb2/08b7/7d110b2369d01d54cbaf91172d62ee36"
                }}
                style={styles.ImageBackground_19_93}
              />
              <View style={styles.View_19_94}>
                <Text style={styles.Text_19_94}>Placeholder text...</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_19_83}>
            <View style={styles.View_19_84}>
              <View style={styles.View_19_86} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfb2/08b7/7d110b2369d01d54cbaf91172d62ee36"
                }}
                style={styles.ImageBackground_19_87}
              />
              <View style={styles.View_19_88}>
                <Text style={styles.Text_19_88}>Select...</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_19_103}>
        <View style={styles.View_19_104}>
          <View style={styles.View_I19_104_19_95}>
            <View style={styles.View_I19_104_19_96}>
              <View style={styles.View_I19_104_19_97}>
                <Text style={styles.Text_I19_104_19_97}>Select Language</Text>
              </View>
              <View style={styles.View_I19_104_19_98} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfb2/08b7/7d110b2369d01d54cbaf91172d62ee36"
                }}
                style={styles.ImageBackground_I19_104_19_99}
              />
              <View style={styles.View_I19_104_19_100}>
                <Text style={styles.Text_I19_104_19_100}>Typing|</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I19_104_19_89}>
            <View style={styles.View_I19_104_19_90}>
              <View style={styles.View_I19_104_19_92} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfb2/08b7/7d110b2369d01d54cbaf91172d62ee36"
                }}
                style={styles.ImageBackground_I19_104_19_93}
              />
              <View style={styles.View_I19_104_19_94}>
                <Text style={styles.Text_I19_104_19_94}>
                  Placeholder text...
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I19_104_19_83}>
            <View style={styles.View_I19_104_19_84}>
              <View style={styles.View_I19_104_19_86} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfb2/08b7/7d110b2369d01d54cbaf91172d62ee36"
                }}
                style={styles.ImageBackground_I19_104_19_87}
              />
              <View style={styles.View_I19_104_19_88}>
                <Text style={styles.Text_I19_104_19_88}>Select...</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6549/8065/140877aeba5c4858bdb554cb55f37289"
        }}
        style={styles.ImageBackground_179_4340}
      />
      <View style={styles.View_12_176}>
        <View style={styles.View_I12_176_12_141}>
          <View style={styles.View_I12_176_12_142}>
            <View style={styles.View_I12_176_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I12_176_12_144}
            />
            <View style={styles.View_I12_176_12_145} />
          </View>
          <View style={styles.View_I12_176_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f65/9806/75f5dac283d67ac62418ebef96ed81dc"
              }}
              style={styles.ImageBackground_I12_176_12_147}
            />
          </View>
          <View style={styles.View_I12_176_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6a6/16d6/c9621bad35777f188b1303e3796b0cf9"
              }}
              style={styles.ImageBackground_I12_176_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I12_176_12_157}>
          <View style={styles.View_I12_176_12_158}>
            <Text style={styles.Text_I12_176_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111.0958078519894%") },
  View_12_169: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111.0958078519894%"),
    minHeight: hp("111.0958078519894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_12_173: {
    width: wp("90.86888709152294%"),
    height: hp("7.256936766410786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.697896928290081%"),
    top: hp("72.82141179986338%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_12_174: {
    width: wp("90.86888709152294%"),
    height: hp("7.256936766410786%"),
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
  View_12_175: {
    width: wp("12.728223074790348%"),
    top: hp("2.251096631659834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.748825343948255%"),
    justifyContent: "center"
  },
  Text_12_175: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_19_50: {
    width: wp("89.8304947781796%"),
    minWidth: wp("89.8304947781796%"),
    height: hp("10.533821647935877%"),
    minHeight: hp("10.533821647935877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.951507078966866%"),
    top: hp("29.51563433871243%")
  },
  View_19_51: {
    width: wp("89.8304947781796%"),
    height: hp("10.533821647935877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_95: {
    flexGrow: 1,
    width: wp("89.8304947781796%"),
    height: hp("10.533821647935877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_96: {
    width: wp("89.83222408522283%"),
    height: hp("10.80704464938471%"),
    top: hp("-0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_97: {
    width: wp("25.69960166947625%"),
    minWidth: wp("25.69960166947625%"),
    minHeight: hp("2.3657024883833087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052751945692648405%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_19_97: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_98: {
    width: wp("89.80626023695224%"),
    height: hp("6.708705881254269%"),
    top: hp("4.0983356413294025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00006464699227048953%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(63, 162, 247, 1)",
    borderWidth: 1
  },
  ImageBackground_19_99: {
    width: wp("3.1827047638934265%"),
    minWidth: wp("3.1827047638934265%"),
    height: hp("0.82502580079876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.16564038219624%"),
    top: hp("6.697541117016737%")
  },
  View_19_100: {
    width: wp("11.930383229794442%"),
    minWidth: wp("11.930383229794442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.193949300111461%"),
    top: hp("5.743032987000515%"),
    justifyContent: "flex-start"
  },
  Text_19_100: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_89: {
    flexGrow: 1,
    width: wp("89.8304947781796%"),
    height: hp("10.533821647935877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_90: {
    width: wp("89.80626023695224%"),
    height: hp("6.708705881254269%"),
    top: hp("3.8251199357496617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00006464699227048953%")
  },
  View_19_92: {
    width: wp("89.80626023695224%"),
    height: hp("6.708705881254269%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(235, 87, 87, 1)",
    borderWidth: 1
  },
  ImageBackground_19_93: {
    width: wp("3.1827047638934265%"),
    minWidth: wp("3.1827047638934265%"),
    height: hp("0.82502580079876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.16567270569239%"),
    top: hp("2.5992054756873273%")
  },
  View_19_94: {
    width: wp("29.67149267238464%"),
    minWidth: wp("29.67149267238464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1939816236075957%"),
    top: hp("1.644697345671105%"),
    justifyContent: "flex-start"
  },
  Text_19_94: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_83: {
    flexGrow: 1,
    width: wp("89.8304947781796%"),
    height: hp("10.533821647935877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_84: {
    width: wp("89.80626023695224%"),
    height: hp("6.708705881254269%"),
    top: hp("3.8251199357496617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00006464699227048953%")
  },
  View_19_86: {
    width: wp("89.80626023695224%"),
    height: hp("6.708705881254269%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  ImageBackground_19_87: {
    width: wp("3.1827047638934265%"),
    minWidth: wp("3.1827047638934265%"),
    height: hp("0.82502580079876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.16567270569239%"),
    top: hp("2.5992054756873273%")
  },
  View_19_88: {
    width: wp("13.254346560727488%"),
    minWidth: wp("13.254346560727488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1939816236075957%"),
    top: hp("1.644697345671105%"),
    justifyContent: "flex-start"
  },
  Text_19_88: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_103: {
    width: wp("89.8304947781796%"),
    minWidth: wp("89.8304947781796%"),
    height: hp("10.533821647935877%"),
    minHeight: hp("10.533821647935877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.834689963934251%"),
    top: hp("47.95815723189891%")
  },
  View_19_104: {
    width: wp("89.8304947781796%"),
    height: hp("10.533821647935877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_104_19_95: {
    flexGrow: 1,
    width: wp("89.8304947781796%"),
    height: hp("10.533821647935877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_104_19_96: {
    width: wp("89.83222408522283%"),
    height: hp("10.80704464938471%"),
    top: hp("-0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I19_104_19_97: {
    width: wp("27.553150130760663%"),
    minWidth: wp("27.553150130760663%"),
    minHeight: hp("2.3688279865869406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.052751945692648405%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I19_104_19_97: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I19_104_19_98: {
    width: wp("89.80626023695224%"),
    height: hp("6.708705881254269%"),
    top: hp("4.098335641329406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00006464699226960136%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(63, 162, 247, 1)",
    borderWidth: 1
  },
  ImageBackground_I19_104_19_99: {
    width: wp("3.1827047638934265%"),
    minWidth: wp("3.1827047638934265%"),
    height: hp("0.82502580079876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.16564038219626%"),
    top: hp("6.697541117016733%")
  },
  View_I19_104_19_100: {
    width: wp("11.930383229794442%"),
    minWidth: wp("11.930383229794442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.193949300111459%"),
    top: hp("5.743032987000511%"),
    justifyContent: "flex-start"
  },
  Text_I19_104_19_100: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I19_104_19_89: {
    flexGrow: 1,
    width: wp("89.8304947781796%"),
    height: hp("10.533821647935877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_104_19_90: {
    width: wp("89.80626023695224%"),
    height: hp("6.708705881254269%"),
    top: hp("3.8251199357496546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00006464699226960136%")
  },
  View_I19_104_19_92: {
    width: wp("89.80626023695224%"),
    height: hp("6.708705881254269%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(235, 87, 87, 1)",
    borderWidth: 1
  },
  ImageBackground_I19_104_19_93: {
    width: wp("3.1827047638934265%"),
    minWidth: wp("3.1827047638934265%"),
    height: hp("0.82502580079876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.16567270569239%"),
    top: hp("2.5992054756873273%")
  },
  View_I19_104_19_94: {
    width: wp("29.67149267238464%"),
    minWidth: wp("29.67149267238464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.193981623607593%"),
    top: hp("1.644697345671112%"),
    justifyContent: "flex-start"
  },
  Text_I19_104_19_94: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I19_104_19_83: {
    flexGrow: 1,
    width: wp("89.8304947781796%"),
    height: hp("10.533821647935877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_104_19_84: {
    width: wp("89.80626023695224%"),
    height: hp("6.708705881254269%"),
    top: hp("3.8251199357496546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00006464699226960136%")
  },
  View_I19_104_19_86: {
    width: wp("89.80626023695224%"),
    height: hp("6.708705881254269%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  ImageBackground_I19_104_19_87: {
    width: wp("3.1827047638934265%"),
    minWidth: wp("3.1827047638934265%"),
    height: hp("0.82502580079876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.16567270569239%"),
    top: hp("2.5992054756873273%")
  },
  View_I19_104_19_88: {
    width: wp("13.254346560727488%"),
    minWidth: wp("13.254346560727488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.193981623607593%"),
    top: hp("1.644697345671112%"),
    justifyContent: "flex-start"
  },
  Text_I19_104_19_88: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_179_4340: {
    width: wp("41.658618789535176%"),
    height: hp("11.815070063690019%"),
    minHeight: hp("11.815070063690019%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.466769870202576%"),
    top: hp("10.799703962815915%")
  },
  View_12_176: {
    width: wp("99.33533194897186%"),
    height: hp("6.178334762489861%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6646357275319984%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I12_176_12_141: {
    flexGrow: 1,
    width: wp("18.019749090477426%"),
    height: hp("2.216142643996275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.5955262341939%"),
    top: hp("2.179993176069416%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I12_176_12_142: {
    width: wp("6.630202092962537%"),
    minWidth: wp("6.630202092962537%"),
    height: hp("1.6504980827289855%"),
    minHeight: hp("1.6504980827289855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.387826276400332%"),
    top: hp("0.2924226020854679%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I12_176_12_143: {
    width: wp("5.835247119996696%"),
    height: hp("1.558084305518312%"),
    top: hp("0.04553873030865807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0002909114652140943%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I12_176_12_144: {
    width: wp("0.35651869259700625%"),
    height: hp("0.5470405510865926%"),
    top: hp("0.5567165020385074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.093690138400319%")
  },
  View_I12_176_12_145: {
    width: wp("4.772614709825106%"),
    height: hp("1.0098532249367302%"),
    top: hp("0.3196507855191255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5315922174394956%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I12_176_12_146: {
    width: wp("5.573627813043161%"),
    height: hp("2.058546008959494%"),
    top: hp("0.14554216562073075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.295816959799026%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I12_176_12_147: {
    width: wp("4.069674124209014%"),
    height: hp("1.5095705543059468%"),
    top: hp("0.18333893656079248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7084340647952132%")
  },
  View_I12_176_12_151: {
    width: wp("4.776653631678125%"),
    minWidth: wp("4.776653631678125%"),
    height: hp("1.6473725845253533%"),
    minHeight: hp("1.6473725845253533%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.001713145295170193%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I12_176_12_152: {
    width: wp("4.51070701667949%"),
    height: hp("1.464777696328085%"),
    top: hp("0.0913734644488553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17706811182864612%")
  },
  View_I12_176_12_157: {
    flexGrow: 1,
    width: wp("14.848294923457559%"),
    height: hp("3.1670638120890966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.571891940289775%"),
    top: hp("1.102268239839481%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I12_176_12_158: {
    flexGrow: 1,
    width: wp("14.314382485061088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08740273354958283%"),
    top: hp("0.8198180485292861%"),
    justifyContent: "flex-start"
  },
  Text_I12_176_12_158: {
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
