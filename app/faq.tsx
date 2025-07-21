// app/(tabs)/faq.tsx
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PRIMARY = "#232265";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Bagaimana cara meminjam sepeda di BikeMus?",
    answer: "Untuk meminjam sepeda, buka aplikasi BikeMus, pilih sepeda yang tersedia di peta, scan QR code pada sepeda, dan sepeda siap digunakan."
  },
  {
    question: "Berapa lama waktu sepeda akan ganti klaim?",
    answer: "Jika 5 menit tidak ada aktivitas, sepeda akan otomatis mengunci dan sesi peminjaman berakhir."
  },
  {
    question: "Bagaimana cara mengembalikan sepeda?",
    answer: "Kendarai sepeda ke titik pengembalian terdekat yang tersedia di peta, parkir sepeda dengan aman, dan akhiri sesi peminjaman melalui aplikasi."
  },
  {
    question: "Apakah ada denda jika terlambat mengembalikan?",
    answer: "Ya, denda keterlambatan adalah Rp 5.000 per jam setelah batas waktu 2 jam terlampaui."
  },
  {
    question: "Bagaimana jika sepeda rusak saat dipinjam?",
    answer: "Segera laporkan kerusakan melalui aplikasi atau hubungi customer service. Jangan mencoba memperbaiki sendiri untuk menghindari denda kerusakan."
  },
  {
    question: "Apakah bisa meminjam sepeda untuk orang lain?",
    answer: "Tidak, setiap peminjaman sepeda hanya berlaku untuk akun yang melakukan peminjaman. Tidak diperkenankan meminjamkan ke orang lain. dan ini khuusus untuk anak UNIMUS saja"
  }
];

export default function FAQScreen() {
  const router = useRouter();
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (index: number): void => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleBackPress = (): void => {
    router.back(); // Kembali ke halaman sebelumnya
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Tombol Back */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Image
          source={require("../assets/images/back.png")}
          style={styles.backIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      
      {/* Tulisan Detail */}
      <Text style={styles.detailTitle}>FAQ</Text>

      {/* FAQ Content */}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.faqList}>
            {faqData.map((item, index) => (
              <View key={index} style={styles.faqItem}>
                <TouchableOpacity
                  style={styles.faqQuestion}
                  onPress={() => toggleExpand(index)}
                >
                  <Text style={styles.questionText}>{item.question}</Text>
                  <Text style={[
                    styles.expandIcon,
                    expandedItems.includes(index) && styles.expandIconRotated
                  ]}>
                    ▼
                  </Text>
                </TouchableOpacity>
                
                {expandedItems.includes(index) && (
                  <View style={styles.faqAnswer}>
                    <Text style={styles.answerText}>{item.answer}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>

          <View style={styles.contactSection}>
            <Text style={styles.contactTitle}>Masih ada pertanyaan?</Text>
            <Text style={styles.contactText}>
              Hubungi customer service kami di email: support@bikemus.com
            </Text>
          </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  //style back button
  backButton: {
  position: 'absolute',
  top: 55, // dinaikkan agar tidak nabrak status bar
  left: 20,
  zIndex: 10,
  padding: 6,
  borderRadius: 20,
},

//style detail title
detailTitle: {
  color: '#000',
  fontSize: 20,
  fontWeight: '600',
  fontFamily: 'Poppins-Medium',
  marginTop: 60, // kasih jarak setelah tombol back
  textAlign: 'center', // tambahkan ini
},

//ukuran icon back
  backIcon: {
    width: 34,
    height: 34,
    tintColor: '#000', // Ubah atau hapus jika ikonmu sudah berwarna
  },

  container: {
    flex: 2,
    padding: 20,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    fontFamily: "Poppins-Bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Poppins-Regular",
    lineHeight: 20,
    marginBottom: 30,
  },
  faqList: {
    marginBottom: 40,
  },
  faqItem: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden",
  },
  faqQuestion: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
  },
  questionText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    fontFamily: "Poppins-Medium",
    flex: 1,
    marginRight: 15,
  },
  expandIcon: {
    fontSize: 14,
    color: PRIMARY,
    fontWeight: "bold",
  },
  expandIconRotated: {
    transform: [{ rotate: "180deg" }],
  },
  faqAnswer: {
    paddingHorizontal: 18,
    paddingBottom: 18,
    paddingTop: 0,
  },
  answerText: {
    fontSize: 14,
    color: "#555",
    fontFamily: "Poppins-Regular",
    lineHeight: 22,
  },
  contactSection: {
    backgroundColor: PRIMARY,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    marginBottom: 8,
  },
  contactText: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
});