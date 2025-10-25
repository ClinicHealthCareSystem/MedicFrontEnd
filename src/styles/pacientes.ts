import { StyleSheet } from "react-native";


export default StyleSheet.create({
background: {
flex: 1,
backgroundColor: "#ADD8E6",
},
container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonText: {
    fontSize: 24,
    color: '#374151',
    fontWeight: 'bold',
  },
  dateRange: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 12,
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#0EA5E9',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  tabTextActive: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flex: 1,
  },
  timeRow: {
    flexDirection: 'row',
    minHeight: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  timeLabel: {
    width: 80,
    padding: 12,
    paddingTop: 4,
  },
  timeLabelText: {
    fontSize: 12,
    color: '#6B7280',
  },
  timeSlot: {
    width: 180,
    padding: 8,
    borderLeftWidth: 1,
    borderLeftColor: '#E5E7EB',
  },
  addButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#0EA5E9',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },


});