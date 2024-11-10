import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const FlashSale = (props: Props) => {
    const saleEndDate = new Date();
    saleEndDate.setDate(saleEndDate.getDate() + 2)
    saleEndDate.setHours(23,59,59)
    
    const [timeUints, setTimeUnits] = useState({
        days:0,
        hours:0,
        minutes:0,
        seconds:0
    })
    useEffect(()=>{
        const calculateTimeUnits = (timeDifference: number) => {
            const seconds = Math.floor(timeDifference/1000);
            // setTimeUnits({
            //     days:Math.floor()
            // })
        }
        const updateCountDown = () =>{
          const currentDate = new Date().getTime();
          const expryTime =   saleEndDate.getTime()
          const timeDifference = expryTime - currentDate;

          if(timeDifference <= 0) {
            calculateTimeUnits(0)
          }else {
            calculateTimeUnits(timeDifference )
          }
        }
        updateCountDown()
        const interval = setInterval(updateCountDown, 1000)
        return () => clearInterval(interval)
    }, [])
    const formatTime = (time:number) => {
     return time.toString().padStart(2, '0')
    }
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <View>
          <View style={styles.timer}>
            <Ionicons name="time-outline" size={20} color={Colors.black} />
            <Text style={styles.timertxt}>{formatTime(timeUints.days)}:{formatTime(timeUints.hours)}:{formatTime(timeUints.minutes)}:{formatTime(timeUints.seconds)}</Text>
          </View>
          <Text style={styles.title}> Flash Sale</Text>
          <TouchableOpacity>
            <Text style={styles.titleTxt}>See All</Text>
          </TouchableOpacity>
        </View>

        <>
        //You have to provide the flatlist for the sale products
        </>
      </View>
    </View>
  );
};

export default FlashSale;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  titleTxt: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  timerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap:10,
  },
  timer: {
    flexDirection:"row",
    gap:5,
backgroundColor:Colors.highlight ,
paddingHorizontal:8,
paddingVertical:5,
borderRadius:12,
 },
  timertxt:{}
});
