/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80011
Source Host           : localhost:3306
Source Database       : tinyshop

Target Server Type    : MYSQL
Target Server Version : 80011
File Encoding         : 65001

Date: 2021-05-20 21:34:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for good
-- ----------------------------
DROP TABLE IF EXISTS `good`;
CREATE TABLE `good` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `thumbnail` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `mechant_id` int(11) DEFAULT NULL,
  `sales` int(11) DEFAULT '0',
  `market_price` decimal(10,2) DEFAULT NULL,
  `sale_price` decimal(10,2) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `status` int(3) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of good
-- ----------------------------
INSERT INTO `good` VALUES ('1', 'OPPO RENO4全面屏手机', null, '这里是描述', null, '18', '1', '0', null, null, null, '1', null, null);
INSERT INTO `good` VALUES ('2', 'VIV0 X50全面屏手机', null, '这里是描述', '12', '18', '1', '0', null, null, null, '1', '2020-12-10 10:47:12', '2020-12-10 10:47:12');
INSERT INTO `good` VALUES ('3', 'VIV0 X50全面屏手机', null, '这里是描述', '13', '18', '1', '0', null, null, null, '1', '2020-12-10 10:47:58', '2020-12-10 10:47:58');
INSERT INTO `good` VALUES ('4', 'VIV0 X50全面屏手机', null, '这里是描述', null, '18', '1', '0', null, null, null, '1', '2020-12-10 10:48:26', '2020-12-10 10:48:26');
INSERT INTO `good` VALUES ('5', 'VIV0 X50全面屏手机', null, '这里是描述', null, '18', '1', '0', null, null, null, '1', '2020-12-10 10:48:30', '2020-12-10 10:48:30');
INSERT INTO `good` VALUES ('6', 'VIV0 X50全面屏手机', null, '这里是描述', null, '18', '1', '0', null, null, null, '1', '2020-12-10 10:52:58', '2020-12-10 10:52:58');
INSERT INTO `good` VALUES ('7', 'VIV0 X50全面屏手机', null, '这里是描述', null, '2', '1', '0', null, null, null, '1', '2020-12-10 11:16:58', '2020-12-10 11:16:58');
INSERT INTO `good` VALUES ('8', 'VIV0 X50全面屏手机', null, '这里是描述', null, '2', '1', '0', null, null, null, '1', '2020-12-10 11:17:41', '2020-12-10 11:17:41');
INSERT INTO `good` VALUES ('9', 'VIV0 X50全面屏手机', null, '这里是描述', null, '2', '1', '0', null, null, null, '1', '2020-12-10 11:24:09', '2020-12-10 11:24:09');
INSERT INTO `good` VALUES ('10', 'VIV0 X50全面屏手机', null, '这里是描述', null, '2', '1', '0', null, null, null, '1', '2020-12-10 11:25:32', '2020-12-10 11:25:32');
INSERT INTO `good` VALUES ('11', 'VIV0 X50全面屏手机', null, '这里是描述', null, '2', '1', '0', null, null, null, '1', '2020-12-10 11:26:16', '2020-12-10 11:26:16');
INSERT INTO `good` VALUES ('12', 'VIV0 X50全面屏手机', null, '这里是描述', null, '2', '1', '0', null, null, null, '1', '2020-12-10 11:26:49', '2020-12-10 11:26:49');
INSERT INTO `good` VALUES ('13', 'abc', '', '', null, '2', '1', '0', null, null, null, '1', '2020-12-11 17:45:27', '2020-12-11 17:45:27');
INSERT INTO `good` VALUES ('14', 'asd', '', '', null, '2', '1', '0', null, null, null, '1', '2020-12-11 17:47:36', '2020-12-11 17:47:36');
INSERT INTO `good` VALUES ('15', 'asd', '', '', '31', '2', '1', '0', null, null, null, '1', '2020-12-11 17:49:18', '2020-12-11 17:49:18');
INSERT INTO `good` VALUES ('16', '童装套装', '', '', '75', '39', '1', '0', '89.00', '150.00', '新品', '1', '2021-01-17 09:50:47', '2021-01-17 09:50:47');

-- ----------------------------
-- Table structure for good_category
-- ----------------------------
DROP TABLE IF EXISTS `good_category`;
CREATE TABLE `good_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `merchant_id` int(11) DEFAULT NULL,
  `status` int(3) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of good_category
-- ----------------------------
INSERT INTO `good_category` VALUES ('4', '手机数码', '', null, null, '1', '1', '2020-12-13 16:13:53', '2020-12-13 16:13:53');
INSERT INTO `good_category` VALUES ('5', '礼品鲜花', '', null, null, '1', '1', '2020-12-13 16:14:03', '2020-12-13 16:14:03');
INSERT INTO `good_category` VALUES ('6', '男装女装', '', null, null, '1', '1', '2020-12-13 16:14:10', '2020-12-13 16:14:10');
INSERT INTO `good_category` VALUES ('7', '母婴用品', '', null, null, '1', '1', '2020-12-13 16:14:19', '2020-12-13 16:14:19');
INSERT INTO `good_category` VALUES ('8', '手机通讯', '', '47', '4', '1', '1', '2020-12-13 16:14:40', '2020-12-13 16:53:47');
INSERT INTO `good_category` VALUES ('9', '运营商', '', null, '4', '1', '1', '2020-12-13 16:47:49', '2020-12-13 16:47:49');
INSERT INTO `good_category` VALUES ('10', '礼品', '', null, '5', '1', '1', '2020-12-13 16:48:00', '2020-12-13 16:48:00');
INSERT INTO `good_category` VALUES ('11', '鲜花', '', null, '5', '1', '1', '2020-12-13 16:48:07', '2020-12-13 16:48:07');
INSERT INTO `good_category` VALUES ('12', '男装', '', null, '6', '1', '1', '2020-12-13 16:48:21', '2020-12-13 16:48:21');
INSERT INTO `good_category` VALUES ('13', '女装', '', null, '6', '1', '1', '2020-12-13 16:48:29', '2020-12-13 16:48:29');
INSERT INTO `good_category` VALUES ('14', '奶粉', '', null, '7', '1', '1', '2020-12-13 16:48:39', '2020-12-13 16:48:39');
INSERT INTO `good_category` VALUES ('15', '营养辅食', '', null, '7', '1', '1', '2020-12-13 16:48:50', '2020-12-13 16:48:50');
INSERT INTO `good_category` VALUES ('16', '童装', '', null, '7', '1', '1', '2020-12-13 16:49:01', '2020-12-13 16:49:01');
INSERT INTO `good_category` VALUES ('17', '喂养用品', '', null, '7', '1', '1', '2020-12-13 16:49:21', '2020-12-13 16:49:21');
INSERT INTO `good_category` VALUES ('18', '全面屏手机', null, '49', '8', '1', '1', '2020-12-13 16:57:50', '2020-12-13 16:57:50');
INSERT INTO `good_category` VALUES ('19', '游戏手机', '', '50', '8', '1', '1', '2020-12-13 17:01:38', '2020-12-13 17:01:38');
INSERT INTO `good_category` VALUES ('20', '老人机', '', '51', '8', '1', '1', '2020-12-13 17:01:55', '2020-12-13 17:01:55');
INSERT INTO `good_category` VALUES ('21', '拍照手机', '', '52', '8', '1', '1', '2020-12-13 17:02:15', '2020-12-13 17:02:22');
INSERT INTO `good_category` VALUES ('22', '女性手机', '', '53', '8', '1', '1', '2020-12-13 17:02:35', '2020-12-13 17:02:35');
INSERT INTO `good_category` VALUES ('23', '合约机', '', '54', '9', '1', '1', '2020-12-13 17:03:00', '2020-12-13 17:03:00');
INSERT INTO `good_category` VALUES ('24', '选好卡', '', '55', '9', '1', '1', '2020-12-13 17:03:16', '2020-12-13 17:03:16');
INSERT INTO `good_category` VALUES ('25', '办套餐', '', '56', '9', '1', '1', '2020-12-13 17:03:39', '2020-12-13 17:03:39');
INSERT INTO `good_category` VALUES ('26', '公益摆件', '', '57', '10', '1', '1', '2020-12-13 17:04:02', '2020-12-13 17:04:02');
INSERT INTO `good_category` VALUES ('27', '创意礼品', '', '58', '10', '1', '1', '2020-12-13 17:04:16', '2020-12-13 17:04:16');
INSERT INTO `good_category` VALUES ('28', '送礼鲜花', '', '59', '11', '1', '1', '2020-12-13 17:04:53', '2020-12-13 17:04:53');
INSERT INTO `good_category` VALUES ('29', '每周一花', '', '60', '11', '1', '1', '2020-12-13 17:05:08', '2020-12-13 17:05:08');
INSERT INTO `good_category` VALUES ('30', '卡通花束', '', '61', '11', '1', '1', '2020-12-13 17:05:22', '2020-12-13 17:05:22');
INSERT INTO `good_category` VALUES ('31', '永生花', '', '62', '11', '1', '1', '2020-12-13 17:05:34', '2020-12-13 17:05:34');
INSERT INTO `good_category` VALUES ('32', '男士T恤', '', '63', '12', '1', '1', '2020-12-13 17:05:54', '2020-12-13 17:05:54');
INSERT INTO `good_category` VALUES ('33', '男士外套', '', '64', '12', '1', '1', '2020-12-13 17:06:13', '2020-12-13 17:06:13');
INSERT INTO `good_category` VALUES ('34', '裙装', '', '65', '13', '1', '1', '2020-12-13 17:06:42', '2020-12-13 17:06:42');
INSERT INTO `good_category` VALUES ('35', '吊带裙', '', '66', '13', '1', '1', '2020-12-13 17:06:59', '2020-12-13 17:06:59');
INSERT INTO `good_category` VALUES ('36', '有机奶粉', '', '67', '14', '1', '1', '2020-12-13 17:07:17', '2020-12-13 17:07:17');
INSERT INTO `good_category` VALUES ('37', '果泥/果汁', '', '68', '15', '1', '1', '2020-12-13 17:07:42', '2020-12-13 17:07:42');
INSERT INTO `good_category` VALUES ('38', '面条', '', '69', '15', '1', '1', '2020-12-13 17:08:01', '2020-12-13 17:08:01');
INSERT INTO `good_category` VALUES ('39', '婴童衣橱', '', '70', '16', '1', '1', '2020-12-13 17:08:20', '2020-12-13 17:08:20');
INSERT INTO `good_category` VALUES ('40', '吸奶器', '', '71', '17', '1', '1', '2020-12-13 17:08:42', '2020-12-13 17:08:42');
INSERT INTO `good_category` VALUES ('41', '儿童餐具', '', '72', '17', '1', '1', '2020-12-13 17:09:06', '2020-12-13 17:09:06');
INSERT INTO `good_category` VALUES ('42', '牙胶安抚', '', '73', '17', '1', '1', '2020-12-13 17:09:26', '2020-12-13 17:09:26');
INSERT INTO `good_category` VALUES ('43', '围兜', '', '74', '17', '1', '1', '2020-12-13 17:09:43', '2020-12-13 18:42:10');

-- ----------------------------
-- Table structure for good_image
-- ----------------------------
DROP TABLE IF EXISTS `good_image`;
CREATE TABLE `good_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_id` int(11) DEFAULT NULL,
  `good_id` int(11) DEFAULT NULL,
  `mechant_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of good_image
-- ----------------------------
INSERT INTO `good_image` VALUES ('1', '2', '1', '1', null, null);
INSERT INTO `good_image` VALUES ('2', '2', '10', '1', '2020-12-10 11:25:32', '2020-12-10 11:25:32');
INSERT INTO `good_image` VALUES ('3', '3', '10', '1', '2020-12-10 11:25:32', '2020-12-10 11:25:32');
INSERT INTO `good_image` VALUES ('4', '2', '11', '1', '2020-12-10 11:26:16', '2020-12-10 11:26:16');
INSERT INTO `good_image` VALUES ('5', '3', '11', '1', '2020-12-10 11:26:16', '2020-12-10 11:26:16');
INSERT INTO `good_image` VALUES ('6', '2', '12', '1', '2020-12-10 11:26:49', '2020-12-10 11:26:49');
INSERT INTO `good_image` VALUES ('7', '3', '12', '1', '2020-12-10 11:26:49', '2020-12-10 11:26:49');
INSERT INTO `good_image` VALUES ('8', null, '13', '1', '2020-12-11 17:45:27', '2020-12-11 17:45:27');
INSERT INTO `good_image` VALUES ('9', null, '14', '1', '2020-12-11 17:47:36', '2020-12-11 17:47:36');
INSERT INTO `good_image` VALUES ('10', '31', '15', '1', '2020-12-11 17:49:18', '2020-12-11 17:49:18');
INSERT INTO `good_image` VALUES ('12', '75', '16', '1', '2021-01-17 09:50:47', '2021-01-17 09:50:47');

-- ----------------------------
-- Table structure for good_order
-- ----------------------------
DROP TABLE IF EXISTS `good_order`;
CREATE TABLE `good_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_no` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` enum('ordered','inpayment','paid','receiving','completed','canceled') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'ordered',
  `address_id` int(11) DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `link_man` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `link_phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `goods_total_qty` int(11) DEFAULT NULL,
  `total_amount` decimal(10,0) DEFAULT NULL,
  `merchant_id` int(11) DEFAULT NULL,
  `shop_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of good_order
-- ----------------------------
INSERT INTO `good_order` VALUES ('1', '1608206328247689', 'ordered', '3', '湖北省武汉市江岸区null汉口武汉客运港旁(汉口江滩)', 'hxy', '13333333333', '1', '150', '1', '良品铺子', '', '良品铺子', '2', '2020-12-17 19:58:48', '2020-12-17 19:58:48');
INSERT INTO `good_order` VALUES ('2', '1610784874243146', 'ordered', '4', '湖北省武汉市江夏区null高新五路', '涂重阳', '18707133663', '1', '2600', '1', '良品铺子', '备注', '管理员1', '1', '2021-01-16 16:14:34', '2021-01-16 16:14:34');

-- ----------------------------
-- Table structure for good_order_line
-- ----------------------------
DROP TABLE IF EXISTS `good_order_line`;
CREATE TABLE `good_order_line` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `good_id` int(11) DEFAULT NULL,
  `good_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sale_price` decimal(10,2) DEFAULT NULL,
  `market_price` decimal(10,2) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `amount` decimal(10,0) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `good_pic` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `good_spec_name` varchar(255) DEFAULT NULL,
  `good_spec_id` int(11) DEFAULT NULL,
  `good_category_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `good_category_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of good_order_line
-- ----------------------------
INSERT INTO `good_order_line` VALUES ('1', '16', '童装套装', '150.00', '89.00', '1', '150', '1', '/public/uploads/2020/12/15/1608036369981975.2750883626092.png', '黑色', '6', '婴童衣橱', '39', '2020-12-17 19:58:48', '2020-12-17 19:58:48');
INSERT INTO `good_order_line` VALUES ('2', '16', '童装套装', '1300.00', '1500.00', '2', '2600', '2', '/public/uploads/2020/12/15/1608036369981975.2750883626092.png', null, null, '婴童衣橱', '39', '2021-01-16 16:14:34', '2021-01-16 16:14:34');

-- ----------------------------
-- Table structure for good_spec
-- ----------------------------
DROP TABLE IF EXISTS `good_spec`;
CREATE TABLE `good_spec` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `pic` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sale_price` decimal(10,2) DEFAULT NULL,
  `market_price` decimal(10,2) DEFAULT NULL,
  `sales` int(11) DEFAULT NULL,
  `stock` int(9) DEFAULT NULL,
  `good_id` int(11) DEFAULT NULL,
  `mechant_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of good_spec
-- ----------------------------
INSERT INTO `good_spec` VALUES ('1', '4g+128g', null, null, '2100.00', '2400.00', null, '999', '1', '1', null, null);
INSERT INTO `good_spec` VALUES ('2', '8+256g', null, null, '1300.00', '1500.00', null, '999', '12', '1', '2020-12-10 11:26:49', '2020-12-10 11:26:49');
INSERT INTO `good_spec` VALUES ('3', 'ddd', null, null, '55.00', '77.00', null, '999', '13', '1', '2020-12-11 17:45:27', '2020-12-11 17:45:27');
INSERT INTO `good_spec` VALUES ('4', 'asd', null, null, '44.00', '66.00', null, '999', '14', '1', '2020-12-11 17:47:36', '2020-12-11 17:47:36');
INSERT INTO `good_spec` VALUES ('5', 'asdad', null, null, '44.00', '88.00', null, '999', '15', '1', '2020-12-11 17:49:18', '2020-12-11 17:49:18');
INSERT INTO `good_spec` VALUES ('6', '黑色', null, null, '150.00', '89.00', '0', '999', '16', '1', '2020-12-15 20:46:41', '2020-12-15 20:46:41');
INSERT INTO `good_spec` VALUES ('7', '白色', null, null, '160.00', '99.00', '0', '800', '16', '1', '2020-12-15 20:46:41', '2020-12-15 20:46:41');

-- ----------------------------
-- Table structure for log_message
-- ----------------------------
DROP TABLE IF EXISTS `log_message`;
CREATE TABLE `log_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sender` int(11) DEFAULT NULL,
  `receiver` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of log_message
-- ----------------------------

-- ----------------------------
-- Table structure for merchant
-- ----------------------------
DROP TABLE IF EXISTS `merchant`;
CREATE TABLE `merchant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `app_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `app_secret` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `mch_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `mch_key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `user_id` int(9) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `logo_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of merchant
-- ----------------------------
INSERT INTO `merchant` VALUES ('1', '良品铺子', '湖北武汉', null, null, null, null, '2', '1', '37', '2020-12-09 16:14:55', '2020-12-12 14:55:52');

-- ----------------------------
-- Table structure for shop_banner
-- ----------------------------
DROP TABLE IF EXISTS `shop_banner`;
CREATE TABLE `shop_banner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `merchant_id` int(11) NOT NULL,
  `status` int(11) DEFAULT '1',
  `image_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop_banner
-- ----------------------------
INSERT INTO `shop_banner` VALUES ('3', '', '5', '1', '1', '83', '2021-01-16 21:42:20', '2021-01-16 21:42:20');
INSERT INTO `shop_banner` VALUES ('4', '', '8', '1', '1', '84', '2021-01-16 21:42:26', '2021-01-16 21:42:26');

-- ----------------------------
-- Table structure for system_file
-- ----------------------------
DROP TABLE IF EXISTS `system_file`;
CREATE TABLE `system_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `format` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `type` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `size` double DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `creator` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of system_file
-- ----------------------------
INSERT INTO `system_file` VALUES ('12', 'image/jpeg', '/public/uploads/2020/12/10/1607585710478612.2704601225427.jpg', 'app\\public\\uploads\\2020\\12\\10\\1607585710478612.2704601225427.jpg', 'image', '171293', '1607585710478612.2704601225427.jpg', null, '2020-12-10 15:35:10', '2020-12-10 15:35:10');
INSERT INTO `system_file` VALUES ('13', 'image/png', '/public/uploads/2020/12/10/1607586268791316.45226868460276.png', 'app\\public\\uploads\\2020\\12\\10\\1607586268791316.45226868460276.png', 'image', '22944', '1607586268791316.45226868460276.png', null, '2020-12-10 15:44:28', '2020-12-10 15:44:28');
INSERT INTO `system_file` VALUES ('14', 'image/png', '/public/uploads/2020/12/10/1607592942761197.40225089389307.png', 'app\\public\\uploads\\2020\\12\\10\\1607592942761197.40225089389307.png', 'image', '6617', '1607592942761197.40225089389307.png', null, '2020-12-10 17:35:42', '2020-12-10 17:35:42');
INSERT INTO `system_file` VALUES ('15', 'image/png', '/public/uploads/2020/12/10/160759303238997.7343253091041.png', 'app\\public\\uploads\\2020\\12\\10\\160759303238997.7343253091041.png', 'image', '6617', '160759303238997.7343253091041.png', null, '2020-12-10 17:37:12', '2020-12-10 17:37:12');
INSERT INTO `system_file` VALUES ('16', 'image/png', '/public/uploads/2020/12/10/1607593121493752.5884963335152.png', 'app\\public\\uploads\\2020\\12\\10\\1607593121493752.5884963335152.png', 'image', '6617', '1607593121493752.5884963335152.png', null, '2020-12-10 17:38:41', '2020-12-10 17:38:41');
INSERT INTO `system_file` VALUES ('17', 'image/png', '/public/uploads/2020/12/11/160767562225622.812118527503202.png', 'app\\public\\uploads\\2020\\12\\11\\160767562225622.812118527503202.png', 'image', '6617', '160767562225622.812118527503202.png', null, '2020-12-11 16:33:42', '2020-12-11 16:33:42');
INSERT INTO `system_file` VALUES ('18', 'image/png', '/public/uploads/2020/12/11/1607675781163465.5708824600693.png', 'app\\public\\uploads\\2020\\12\\11\\1607675781163465.5708824600693.png', 'image', '6617', '1607675781163465.5708824600693.png', null, '2020-12-11 16:36:21', '2020-12-11 16:36:21');
INSERT INTO `system_file` VALUES ('19', 'image/png', '/public/uploads/2020/12/11/1607675868020564.3454779143904.png', 'app\\public\\uploads\\2020\\12\\11\\1607675868020564.3454779143904.png', 'image', '6617', '1607675868020564.3454779143904.png', null, '2020-12-11 16:37:48', '2020-12-11 16:37:48');
INSERT INTO `system_file` VALUES ('20', 'image/png', '/public/uploads/2020/12/11/1607675947424568.7781510189842.png', 'app\\public\\uploads\\2020\\12\\11\\1607675947424568.7781510189842.png', 'image', '6617', '1607675947424568.7781510189842.png', null, '2020-12-11 16:39:07', '2020-12-11 16:39:07');
INSERT INTO `system_file` VALUES ('21', 'image/png', '/public/uploads/2020/12/11/1607676018181360.8586906542668.png', 'app\\public\\uploads\\2020\\12\\11\\1607676018181360.8586906542668.png', 'image', '6617', '1607676018181360.8586906542668.png', null, '2020-12-11 16:40:18', '2020-12-11 16:40:18');
INSERT INTO `system_file` VALUES ('22', 'image/png', '/public/uploads/2020/12/11/1607676134375267.2741984452358.png', 'app\\public\\uploads\\2020\\12\\11\\1607676134375267.2741984452358.png', 'image', '6617', '1607676134375267.2741984452358.png', null, '2020-12-11 16:42:14', '2020-12-11 16:42:14');
INSERT INTO `system_file` VALUES ('23', 'image/png', '/public/uploads/2020/12/11/1607676241015310.35892925037876.png', 'app\\public\\uploads\\2020\\12\\11\\1607676241015310.35892925037876.png', 'image', '6617', '1607676241015310.35892925037876.png', null, '2020-12-11 16:44:01', '2020-12-11 16:44:01');
INSERT INTO `system_file` VALUES ('24', 'image/png', '/public/uploads/2020/12/11/1607678467317762.4493448536966.png', 'app\\public\\uploads\\2020\\12\\11\\1607678467317762.4493448536966.png', 'image', '6617', '1607678467317762.4493448536966.png', null, '2020-12-11 17:21:07', '2020-12-11 17:21:07');
INSERT INTO `system_file` VALUES ('25', 'image/png', '/public/uploads/2020/12/11/1607678542414282.97673823483694.png', 'app\\public\\uploads\\2020\\12\\11\\1607678542414282.97673823483694.png', 'image', '6617', '1607678542414282.97673823483694.png', null, '2020-12-11 17:22:22', '2020-12-11 17:22:22');
INSERT INTO `system_file` VALUES ('26', 'image/png', '/public/uploads/2020/12/11/1607678587217345.3324539245119.png', 'app\\public\\uploads\\2020\\12\\11\\1607678587217345.3324539245119.png', 'image', '6617', '1607678587217345.3324539245119.png', null, '2020-12-11 17:23:07', '2020-12-11 17:23:07');
INSERT INTO `system_file` VALUES ('27', 'image/png', '/public/uploads/2020/12/11/160767952955799.65299454650788.png', 'app\\public\\uploads\\2020\\12\\11\\160767952955799.65299454650788.png', 'image', '6617', '160767952955799.65299454650788.png', null, '2020-12-11 17:38:49', '2020-12-11 17:38:49');
INSERT INTO `system_file` VALUES ('28', 'image/png', '/public/uploads/2020/12/11/1607679919889994.8228836655591.png', 'app\\public\\uploads\\2020\\12\\11\\1607679919889994.8228836655591.png', 'image', '6617', '1607679919889994.8228836655591.png', null, '2020-12-11 17:45:19', '2020-12-11 17:45:19');
INSERT INTO `system_file` VALUES ('29', 'image/png', '/public/uploads/2020/12/11/160768003363696.43257995116849.png', 'app\\public\\uploads\\2020\\12\\11\\160768003363696.43257995116849.png', 'image', '6617', '160768003363696.43257995116849.png', null, '2020-12-11 17:47:13', '2020-12-11 17:47:13');
INSERT INTO `system_file` VALUES ('30', 'image/png', '/public/uploads/2020/12/11/1607680082437128.5316673595738.png', 'app\\public\\uploads\\2020\\12\\11\\1607680082437128.5316673595738.png', 'image', '6617', '1607680082437128.5316673595738.png', null, '2020-12-11 17:48:02', '2020-12-11 17:48:02');
INSERT INTO `system_file` VALUES ('31', 'image/png', '/public/uploads/2020/12/11/1607680148715820.0546766972601.png', 'app\\public\\uploads\\2020\\12\\11\\1607680148715820.0546766972601.png', 'image', '6617', '1607680148715820.0546766972601.png', null, '2020-12-11 17:49:08', '2020-12-11 17:49:08');
INSERT INTO `system_file` VALUES ('32', 'image/png', '/public/uploads/2020/12/12/1607754130523812.2794754929106.png', 'app\\public\\uploads\\2020\\12\\12\\1607754130523812.2794754929106.png', 'image', '113592', '1607754130523812.2794754929106.png', null, '2020-12-12 14:22:10', '2020-12-12 14:22:10');
INSERT INTO `system_file` VALUES ('33', 'image/png', '/public/uploads/2020/12/12/1607754204869247.31055635290966.png', 'app\\public\\uploads\\2020\\12\\12\\1607754204869247.31055635290966.png', 'image', '113592', '1607754204869247.31055635290966.png', null, '2020-12-12 14:23:24', '2020-12-12 14:23:24');
INSERT INTO `system_file` VALUES ('34', 'image/png', '/public/uploads/2020/12/12/1607754606300671.2143153498937.png', 'app\\public\\uploads\\2020\\12\\12\\1607754606300671.2143153498937.png', 'image', '113592', '1607754606300671.2143153498937.png', null, '2020-12-12 14:30:06', '2020-12-12 14:30:06');
INSERT INTO `system_file` VALUES ('35', 'image/jpeg', '/public/uploads/2020/12/12/1607754866720384.79624696266.jpg', 'app\\public\\uploads\\2020\\12\\12\\1607754866720384.79624696266.jpg', 'image', '11976', '1607754866720384.79624696266.jpg', null, '2020-12-12 14:34:26', '2020-12-12 14:34:26');
INSERT INTO `system_file` VALUES ('36', 'image/png', '/public/uploads/2020/12/12/1607755907050963.6272677085891.png', 'app\\public\\uploads\\2020\\12\\12\\1607755907050963.6272677085891.png', 'image', '2726', '1607755907050963.6272677085891.png', null, '2020-12-12 14:51:47', '2020-12-12 14:51:47');
INSERT INTO `system_file` VALUES ('37', 'image/png', '/public/uploads/2020/12/12/1607756151418942.2677367787861.png', 'app\\public\\uploads\\2020\\12\\12\\1607756151418942.2677367787861.png', 'image', '2726', '1607756151418942.2677367787861.png', null, '2020-12-12 14:55:51', '2020-12-12 14:55:51');
INSERT INTO `system_file` VALUES ('38', 'image/png', '/public/uploads/2020/12/13/1607847711383699.8055364576614.png', 'app\\public\\uploads\\2020\\12\\13\\1607847711383699.8055364576614.png', 'image', '113592', '1607847711383699.8055364576614.png', null, '2020-12-13 16:21:51', '2020-12-13 16:21:51');
INSERT INTO `system_file` VALUES ('39', 'image/png', '/public/uploads/2020/12/13/1607847736203992.2784646556853.png', 'app\\public\\uploads\\2020\\12\\13\\1607847736203992.2784646556853.png', 'image', '113592', '1607847736203992.2784646556853.png', null, '2020-12-13 16:22:16', '2020-12-13 16:22:16');
INSERT INTO `system_file` VALUES ('40', 'image/png', '/public/uploads/2020/12/13/160784776265796.24282526961636.png', 'app\\public\\uploads\\2020\\12\\13\\160784776265796.24282526961636.png', 'image', '113592', '160784776265796.24282526961636.png', null, '2020-12-13 16:22:42', '2020-12-13 16:22:42');
INSERT INTO `system_file` VALUES ('41', 'image/png', '/public/uploads/2020/12/13/160784810003555.09470810002903.png', 'app\\public\\uploads\\2020\\12\\13\\160784810003555.09470810002903.png', 'image', '113592', '160784810003555.09470810002903.png', null, '2020-12-13 16:28:20', '2020-12-13 16:28:20');
INSERT INTO `system_file` VALUES ('42', 'image/png', '/public/uploads/2020/12/13/1607848235286117.6514665850319.png', 'app\\public\\uploads\\2020\\12\\13\\1607848235286117.6514665850319.png', 'image', '113592', '1607848235286117.6514665850319.png', null, '2020-12-13 16:30:35', '2020-12-13 16:30:35');
INSERT INTO `system_file` VALUES ('43', 'image/png', '/public/uploads/2020/12/13/1607848802603834.6227135864004.png', 'app\\public\\uploads\\2020\\12\\13\\1607848802603834.6227135864004.png', 'image', '113592', '1607848802603834.6227135864004.png', null, '2020-12-13 16:40:02', '2020-12-13 16:40:02');
INSERT INTO `system_file` VALUES ('44', 'image/png', '/public/uploads/2020/12/13/160784883154224.417377062376787.png', 'app\\public\\uploads\\2020\\12\\13\\160784883154224.417377062376787.png', 'image', '113592', '160784883154224.417377062376787.png', null, '2020-12-13 16:40:31', '2020-12-13 16:40:31');
INSERT INTO `system_file` VALUES ('45', 'image/png', '/public/uploads/2020/12/13/1607848924036204.54798997669.png', 'app\\public\\uploads\\2020\\12\\13\\1607848924036204.54798997669.png', 'image', '113592', '1607848924036204.54798997669.png', null, '2020-12-13 16:42:04', '2020-12-13 16:42:04');
INSERT INTO `system_file` VALUES ('46', 'image/png', '/public/uploads/2020/12/13/1607848955271513.0037894875286.png', 'app\\public\\uploads\\2020\\12\\13\\1607848955271513.0037894875286.png', 'image', '113592', '1607848955271513.0037894875286.png', null, '2020-12-13 16:42:35', '2020-12-13 16:42:35');
INSERT INTO `system_file` VALUES ('48', 'image/jpeg', '/public/uploads/2020/12/13/160784977304024.361411823065282.jpg', 'app\\public\\uploads\\2020\\12\\13\\160784977304024.361411823065282.jpg', 'image', '8001', '160784977304024.361411823065282.jpg', null, '2020-12-13 16:56:13', '2020-12-13 16:56:13');
INSERT INTO `system_file` VALUES ('49', 'image/jpeg', '/public/uploads/2020/12/13/1607849841448769.5168552010039.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607849841448769.5168552010039.jpg', 'image', '8001', '1607849841448769.5168552010039.jpg', null, '2020-12-13 16:57:21', '2020-12-13 16:57:21');
INSERT INTO `system_file` VALUES ('50', 'image/jpeg', '/public/uploads/2020/12/13/1607850096439700.148397123594.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850096439700.148397123594.jpg', 'image', '19580', '1607850096439700.148397123594.jpg', null, '2020-12-13 17:01:36', '2020-12-13 17:01:36');
INSERT INTO `system_file` VALUES ('51', 'image/jpeg', '/public/uploads/2020/12/13/1607850114481328.5455870651011.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850114481328.5455870651011.jpg', 'image', '14667', '1607850114481328.5455870651011.jpg', null, '2020-12-13 17:01:54', '2020-12-13 17:01:54');
INSERT INTO `system_file` VALUES ('52', 'image/jpeg', '/public/uploads/2020/12/13/160785014201975.71720530766002.jpg', 'app\\public\\uploads\\2020\\12\\13\\160785014201975.71720530766002.jpg', 'image', '3959', '160785014201975.71720530766002.jpg', null, '2020-12-13 17:02:22', '2020-12-13 17:02:22');
INSERT INTO `system_file` VALUES ('53', 'image/jpeg', '/public/uploads/2020/12/13/1607850154300472.14451416214166.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850154300472.14451416214166.jpg', 'image', '4018', '1607850154300472.14451416214166.jpg', null, '2020-12-13 17:02:34', '2020-12-13 17:02:34');
INSERT INTO `system_file` VALUES ('54', 'image/jpeg', '/public/uploads/2020/12/13/1607850178665562.4676813632846.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850178665562.4676813632846.jpg', 'image', '14667', '1607850178665562.4676813632846.jpg', null, '2020-12-13 17:02:58', '2020-12-13 17:02:58');
INSERT INTO `system_file` VALUES ('55', 'image/jpeg', '/public/uploads/2020/12/13/1607850195584665.740414198998.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850195584665.740414198998.jpg', 'image', '3959', '1607850195584665.740414198998.jpg', null, '2020-12-13 17:03:15', '2020-12-13 17:03:15');
INSERT INTO `system_file` VALUES ('56', 'image/jpeg', '/public/uploads/2020/12/13/160785021844525.9792968692083.jpg', 'app\\public\\uploads\\2020\\12\\13\\160785021844525.9792968692083.jpg', 'image', '4018', '160785021844525.9792968692083.jpg', null, '2020-12-13 17:03:38', '2020-12-13 17:03:38');
INSERT INTO `system_file` VALUES ('57', 'image/jpeg', '/public/uploads/2020/12/13/160785023732732.38363773834729.jpg', 'app\\public\\uploads\\2020\\12\\13\\160785023732732.38363773834729.jpg', 'image', '21783', '160785023732732.38363773834729.jpg', null, '2020-12-13 17:03:57', '2020-12-13 17:03:57');
INSERT INTO `system_file` VALUES ('58', 'image/jpeg', '/public/uploads/2020/12/13/1607850255977899.6564041066908.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850255977899.6564041066908.jpg', 'image', '20726', '1607850255977899.6564041066908.jpg', null, '2020-12-13 17:04:15', '2020-12-13 17:04:15');
INSERT INTO `system_file` VALUES ('59', 'image/jpeg', '/public/uploads/2020/12/13/1607850292928470.49422118211146.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850292928470.49422118211146.jpg', 'image', '13666', '1607850292928470.49422118211146.jpg', null, '2020-12-13 17:04:52', '2020-12-13 17:04:52');
INSERT INTO `system_file` VALUES ('60', 'image/jpeg', '/public/uploads/2020/12/13/1607850307572657.0775760553543.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850307572657.0775760553543.jpg', 'image', '10459', '1607850307572657.0775760553543.jpg', null, '2020-12-13 17:05:07', '2020-12-13 17:05:07');
INSERT INTO `system_file` VALUES ('61', 'image/jpeg', '/public/uploads/2020/12/13/1607850321397135.4600130172987.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850321397135.4600130172987.jpg', 'image', '13336', '1607850321397135.4600130172987.jpg', null, '2020-12-13 17:05:21', '2020-12-13 17:05:21');
INSERT INTO `system_file` VALUES ('62', 'image/jpeg', '/public/uploads/2020/12/13/1607850333618995.1589649304262.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850333618995.1589649304262.jpg', 'image', '15048', '1607850333618995.1589649304262.jpg', null, '2020-12-13 17:05:33', '2020-12-13 17:05:33');
INSERT INTO `system_file` VALUES ('63', 'image/jpeg', '/public/uploads/2020/12/13/1607850353485483.6327618104994.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850353485483.6327618104994.jpg', 'image', '11536', '1607850353485483.6327618104994.jpg', null, '2020-12-13 17:05:53', '2020-12-13 17:05:53');
INSERT INTO `system_file` VALUES ('64', 'image/jpeg', '/public/uploads/2020/12/13/1607850372059388.28359843166237.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850372059388.28359843166237.jpg', 'image', '10512', '1607850372059388.28359843166237.jpg', null, '2020-12-13 17:06:12', '2020-12-13 17:06:12');
INSERT INTO `system_file` VALUES ('65', 'image/jpeg', '/public/uploads/2020/12/13/160785038893544.858464887531866.jpg', 'app\\public\\uploads\\2020\\12\\13\\160785038893544.858464887531866.jpg', 'image', '6538', '160785038893544.858464887531866.jpg', null, '2020-12-13 17:06:28', '2020-12-13 17:06:28');
INSERT INTO `system_file` VALUES ('66', 'image/jpeg', '/public/uploads/2020/12/13/1607850418378968.3004170654559.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850418378968.3004170654559.jpg', 'image', '4597', '1607850418378968.3004170654559.jpg', null, '2020-12-13 17:06:58', '2020-12-13 17:06:58');
INSERT INTO `system_file` VALUES ('67', 'image/jpeg', '/public/uploads/2020/12/13/1607850436586894.8716044240068.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850436586894.8716044240068.jpg', 'image', '5930', '1607850436586894.8716044240068.jpg', null, '2020-12-13 17:07:16', '2020-12-13 17:07:16');
INSERT INTO `system_file` VALUES ('68', 'image/jpeg', '/public/uploads/2020/12/13/1607850461794934.4004382147921.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850461794934.4004382147921.jpg', 'image', '18224', '1607850461794934.4004382147921.jpg', null, '2020-12-13 17:07:41', '2020-12-13 17:07:41');
INSERT INTO `system_file` VALUES ('69', 'image/jpeg', '/public/uploads/2020/12/13/1607850480554565.2813439170487.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850480554565.2813439170487.jpg', 'image', '9617', '1607850480554565.2813439170487.jpg', null, '2020-12-13 17:08:00', '2020-12-13 17:08:00');
INSERT INTO `system_file` VALUES ('70', 'image/jpeg', '/public/uploads/2020/12/13/1607850499554821.565947409002.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850499554821.565947409002.jpg', 'image', '6119', '1607850499554821.565947409002.jpg', null, '2020-12-13 17:08:19', '2020-12-13 17:08:19');
INSERT INTO `system_file` VALUES ('71', 'image/jpeg', '/public/uploads/2020/12/13/1607850521102341.1271673110079.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850521102341.1271673110079.jpg', 'image', '12643', '1607850521102341.1271673110079.jpg', null, '2020-12-13 17:08:41', '2020-12-13 17:08:41');
INSERT INTO `system_file` VALUES ('72', 'image/jpeg', '/public/uploads/2020/12/13/1607850543178781.6294790803047.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850543178781.6294790803047.jpg', 'image', '13664', '1607850543178781.6294790803047.jpg', null, '2020-12-13 17:09:03', '2020-12-13 17:09:03');
INSERT INTO `system_file` VALUES ('73', 'image/jpeg', '/public/uploads/2020/12/13/1607850565557440.0401892697401.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850565557440.0401892697401.jpg', 'image', '19424', '1607850565557440.0401892697401.jpg', null, '2020-12-13 17:09:25', '2020-12-13 17:09:25');
INSERT INTO `system_file` VALUES ('74', 'image/jpeg', '/public/uploads/2020/12/13/1607850582343957.5315162958356.jpg', 'app\\public\\uploads\\2020\\12\\13\\1607850582343957.5315162958356.jpg', 'image', '16734', '1607850582343957.5315162958356.jpg', null, '2020-12-13 17:09:42', '2020-12-13 17:09:42');
INSERT INTO `system_file` VALUES ('75', 'image/png', '/public/uploads/2020/12/15/1608036369981975.2750883626092.png', 'app\\public\\uploads\\2020\\12\\15\\1608036369981975.2750883626092.png', 'image', '113592', '1608036369981975.2750883626092.png', null, '2020-12-15 20:46:09', '2020-12-15 20:46:09');
INSERT INTO `system_file` VALUES ('76', 'image/png', '/public/uploads/2021/01/16/1610803872180411.5732444687206.png', 'app\\public\\uploads\\2021\\01\\16\\1610803872180411.5732444687206.png', 'image', '473403', '1610803872180411.5732444687206.png', null, '2021-01-16 21:31:12', '2021-01-16 21:31:12');
INSERT INTO `system_file` VALUES ('77', 'image/png', '/public/uploads/2021/01/16/1610803897004701.3186472676771.png', 'app\\public\\uploads\\2021\\01\\16\\1610803897004701.3186472676771.png', 'image', '473403', '1610803897004701.3186472676771.png', null, '2021-01-16 21:31:37', '2021-01-16 21:31:37');
INSERT INTO `system_file` VALUES ('78', 'image/png', '/public/uploads/2021/01/16/1610803926749427.67238575897835.png', 'app\\public\\uploads\\2021\\01\\16\\1610803926749427.67238575897835.png', 'image', '473403', '1610803926749427.67238575897835.png', null, '2021-01-16 21:32:06', '2021-01-16 21:32:06');
INSERT INTO `system_file` VALUES ('79', 'image/png', '/public/uploads/2021/01/16/1610803993616316.8181851085727.png', 'app\\public\\uploads\\2021\\01\\16\\1610803993616316.8181851085727.png', 'image', '473403', '1610803993616316.8181851085727.png', null, '2021-01-16 21:33:13', '2021-01-16 21:33:13');
INSERT INTO `system_file` VALUES ('80', 'image/png', '/public/uploads/2021/01/16/1610804031554206.88391131868977.png', 'app\\public\\uploads\\2021\\01\\16\\1610804031554206.88391131868977.png', 'image', '473403', '1610804031554206.88391131868977.png', null, '2021-01-16 21:33:51', '2021-01-16 21:33:51');
INSERT INTO `system_file` VALUES ('81', 'image/png', '/public/uploads/2021/01/16/1610804061750202.85157394119824.png', 'app\\public\\uploads\\2021\\01\\16\\1610804061750202.85157394119824.png', 'image', '473403', '1610804061750202.85157394119824.png', null, '2021-01-16 21:34:21', '2021-01-16 21:34:21');
INSERT INTO `system_file` VALUES ('82', 'image/png', '/public/uploads/2021/01/16/1610804107896668.2561245008455.png', 'app\\public\\uploads\\2021\\01\\16\\1610804107896668.2561245008455.png', 'image', '473403', '1610804107896668.2561245008455.png', null, '2021-01-16 21:35:07', '2021-01-16 21:35:07');
INSERT INTO `system_file` VALUES ('83', 'image/jpeg', '/public/uploads/2021/01/16/1610804233531567.5261065878891.jpg', 'app\\public\\uploads\\2021\\01\\16\\1610804233531567.5261065878891.jpg', 'image', '85944', '1610804233531567.5261065878891.jpg', null, '2021-01-16 21:37:13', '2021-01-16 21:37:13');
INSERT INTO `system_file` VALUES ('84', 'image/jpeg', '/public/uploads/2021/01/16/1610804243994930.8798108642115.jpg', 'app\\public\\uploads\\2021\\01\\16\\1610804243994930.8798108642115.jpg', 'image', '16195', '1610804243994930.8798108642115.jpg', null, '2021-01-16 21:37:24', '2021-01-16 21:37:24');

-- ----------------------------
-- Table structure for system_menu
-- ----------------------------
DROP TABLE IF EXISTS `system_menu`;
CREATE TABLE `system_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `icon` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `parent_id` int(11) DEFAULT NULL,
  `sort` int(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of system_menu
-- ----------------------------
INSERT INTO `system_menu` VALUES ('1', '系统管理', '/system', null, '1', null, null, null, '2020-12-10 14:46:18');
INSERT INTO `system_menu` VALUES ('2', '菜单管理', '/system/menu', null, '1', '1', null, '2020-08-24 10:14:58', '2020-08-24 10:14:58');
INSERT INTO `system_menu` VALUES ('4', '用户管理', '/system/user', '', '1', '1', null, '2020-12-10 14:45:01', '2020-12-10 14:45:01');
INSERT INTO `system_menu` VALUES ('5', '角色管理', '/system/role', null, '1', '1', null, '2020-12-10 14:45:16', '2020-12-10 14:46:46');
INSERT INTO `system_menu` VALUES ('6', '文件管理', '/system/file', null, '1', '1', null, '2020-12-10 14:45:29', '2020-12-10 14:45:29');
INSERT INTO `system_menu` VALUES ('7', '商家管理', '/merchant', '', '1', null, null, '2020-12-10 15:49:44', '2020-12-10 15:49:44');
INSERT INTO `system_menu` VALUES ('8', '商家列表', '/merchant/merchant', null, '1', '7', null, '2020-12-10 15:50:00', '2020-12-10 15:50:00');
INSERT INTO `system_menu` VALUES ('9', '商品管理', '/good', '', '1', null, null, '2020-12-10 17:02:08', '2020-12-10 17:02:08');
INSERT INTO `system_menu` VALUES ('10', '商品列表', '/good/list', null, '1', '9', null, '2020-12-10 17:02:22', '2020-12-10 17:02:22');
INSERT INTO `system_menu` VALUES ('11', '商品分类', '/good/category', null, '1', '9', null, '2020-12-10 17:21:35', '2020-12-10 17:21:35');
INSERT INTO `system_menu` VALUES ('12', '日志管理', '/system/log', null, '1', '1', null, '2020-12-11 09:47:22', '2020-12-11 09:47:22');
INSERT INTO `system_menu` VALUES ('13', '设置', '/setting', '', '1', null, null, '2020-12-12 14:33:35', '2020-12-12 14:33:35');
INSERT INTO `system_menu` VALUES ('14', '个人设置', '/setting/person', null, '1', '13', null, '2020-12-12 14:33:48', '2020-12-12 14:33:48');
INSERT INTO `system_menu` VALUES ('15', '店铺资料', '/setting/shop', null, '1', '13', null, '2020-12-12 14:48:10', '2020-12-12 14:48:10');
INSERT INTO `system_menu` VALUES ('16', '订单管理', '/order', '', '1', null, null, '2020-12-16 20:27:42', '2020-12-16 20:27:42');
INSERT INTO `system_menu` VALUES ('17', '订单列表', '/order/list', null, '1', '16', null, '2020-12-16 20:27:56', '2020-12-16 20:27:56');
INSERT INTO `system_menu` VALUES ('18', '广告图', '/setting/banner', null, '1', '13', null, '2021-01-16 21:07:02', '2021-01-16 21:07:02');
INSERT INTO `system_menu` VALUES ('19', '权限管理', '/system/permission', null, '1', '1', null, '2021-01-17 19:41:13', '2021-01-17 19:41:13');

-- ----------------------------
-- Table structure for system_permission
-- ----------------------------
DROP TABLE IF EXISTS `system_permission`;
CREATE TABLE `system_permission` (
  `id` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `describe` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `actions` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of system_permission
-- ----------------------------
INSERT INTO `system_permission` VALUES ('system_role', '角色管理', null, 'query,add,delete,detail', '2021-01-17 20:38:31', '2021-01-17 20:38:31');
INSERT INTO `system_permission` VALUES ('user', '用户管理', null, 'query,add,delete,detail', null, null);

-- ----------------------------
-- Table structure for system_req_log
-- ----------------------------
DROP TABLE IF EXISTS `system_req_log`;
CREATE TABLE `system_req_log` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `params` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `action` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `method` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `consume_time` bigint(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=974 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of system_req_log
-- ----------------------------
INSERT INTO `system_req_log` VALUES ('887', '::1', '1', '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/user/login', 'POST', '200', '24', '2021-01-15 21:09:12', '2021-01-15 21:09:12');
INSERT INTO `system_req_log` VALUES ('888', '::1', '1', '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/user/login', 'POST', '200', '54', '2021-01-16 13:59:56', '2021-01-16 13:59:56');
INSERT INTO `system_req_log` VALUES ('889', '::1', '1', '{\"linkMan\":\"涂重阳\",\"linkPhone\":\"18707133663\",\"province\":\"湖北省\",\"city\":\"武汉市\",\"district\":\"江夏区\",\"place\":\"高新五路\",\"isDefault\":false}', '/api/member/address', 'POST', '404', '2', '2021-01-16 14:07:09', '2021-01-16 14:07:09');
INSERT INTO `system_req_log` VALUES ('890', '::1', '1', '{\"linkMan\":\"涂重阳\",\"linkPhone\":\"18707133663\",\"province\":\"湖北省\",\"city\":\"武汉市\",\"district\":\"江夏区\",\"place\":\"高新五路\",\"isDefault\":false,\"userId\":1}', '/api/member/address/save', 'POST', '200', '62', '2021-01-16 14:07:17', '2021-01-16 14:07:17');
INSERT INTO `system_req_log` VALUES ('891', '::1', '1', '{}', '/api/member/address/setDefault/1', 'POST', '500', '21', '2021-01-16 14:15:25', '2021-01-16 14:15:25');
INSERT INTO `system_req_log` VALUES ('892', '::1', '1', '{}', '/api/member/address/setDefault/1', 'POST', '200', '62', '2021-01-16 14:15:48', '2021-01-16 14:15:48');
INSERT INTO `system_req_log` VALUES ('893', '::1', '1', '{}', '/api/member/address/setDefault/4', 'POST', '200', '112', '2021-01-16 14:16:30', '2021-01-16 14:16:30');
INSERT INTO `system_req_log` VALUES ('894', '::1', '1', '{\"goodId\":1,\"userId\":1}', '/api/member/fav/save', 'POST', '200', '45', '2021-01-16 14:45:07', '2021-01-16 14:45:07');
INSERT INTO `system_req_log` VALUES ('895', '::1', '1', '{\"addressId\":1,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order', 'POST', '404', '2', '2021-01-16 15:24:36', '2021-01-16 15:24:36');
INSERT INTO `system_req_log` VALUES ('896', '::1', '1', '{\"addressId\":1,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order', 'POST', '404', '3', '2021-01-16 15:24:39', '2021-01-16 15:24:39');
INSERT INTO `system_req_log` VALUES ('897', '::1', '1', '{\"addressId\":1,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order/save', 'POST', '500', '25', '2021-01-16 15:24:46', '2021-01-16 15:24:46');
INSERT INTO `system_req_log` VALUES ('898', '::1', '1', '{\"addressId\":1,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order/save', 'POST', '500', '39', '2021-01-16 15:26:01', '2021-01-16 15:26:01');
INSERT INTO `system_req_log` VALUES ('899', '::1', '1', '{\"addressId\":1,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order/save', 'POST', '500', '18', '2021-01-16 15:26:03', '2021-01-16 15:26:03');
INSERT INTO `system_req_log` VALUES ('900', '::1', '1', '{\"addressId\":1,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order/save', 'POST', '500', '30', '2021-01-16 15:26:29', '2021-01-16 15:26:29');
INSERT INTO `system_req_log` VALUES ('901', '::1', '1', '{\"addressId\":1,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order/save', 'POST', '500', '16', '2021-01-16 15:26:31', '2021-01-16 15:26:31');
INSERT INTO `system_req_log` VALUES ('902', '::1', '1', '{\"addressId\":1,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order/save', 'POST', '200', '41', '2021-01-16 15:26:34', '2021-01-16 15:26:34');
INSERT INTO `system_req_log` VALUES ('903', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order/save', 'POST', '200', '26', '2021-01-16 15:27:05', '2021-01-16 15:27:05');
INSERT INTO `system_req_log` VALUES ('904', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order/save', 'POST', '200', '39', '2021-01-16 15:27:48', '2021-01-16 15:27:48');
INSERT INTO `system_req_log` VALUES ('905', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order/save', 'POST', '200', '57', '2021-01-16 15:32:34', '2021-01-16 15:32:34');
INSERT INTO `system_req_log` VALUES ('906', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order/save', 'POST', '200', '30', '2021-01-16 15:34:32', '2021-01-16 15:34:32');
INSERT INTO `system_req_log` VALUES ('907', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order/save', 'POST', '200', '16', '2021-01-16 15:34:33', '2021-01-16 15:34:33');
INSERT INTO `system_req_log` VALUES ('908', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\",\"goodCategoryName\":\"童装\",\"goodCategoryId\":1}]}', '/api/member/order/save', 'POST', '200', '36', '2021-01-16 15:34:34', '2021-01-16 15:34:34');
INSERT INTO `system_req_log` VALUES ('909', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\"}]}', '/api/member/order/save', 'POST', '200', '37', '2021-01-16 15:35:31', '2021-01-16 15:35:31');
INSERT INTO `system_req_log` VALUES ('910', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\"}]}', '/api/member/order/save', 'POST', '200', '28', '2021-01-16 15:36:12', '2021-01-16 15:36:12');
INSERT INTO `system_req_log` VALUES ('911', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"salePrice\":100,\"qty\":1,\"goodSpecId\":1,\"goodSpecName\":\"红色M\"}]}', '/api/member/order/save', 'POST', '200', '41', '2021-01-16 15:36:17', '2021-01-16 15:36:17');
INSERT INTO `system_req_log` VALUES ('912', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"qty\":1,\"goodSpecId\":1}]}', '/api/member/order/save', 'POST', '200', '59', '2021-01-16 15:49:27', '2021-01-16 15:49:27');
INSERT INTO `system_req_log` VALUES ('913', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"qty\":1,\"goodSpecId\":2}]}', '/api/member/order/save', 'POST', '200', '33', '2021-01-16 15:49:47', '2021-01-16 15:49:47');
INSERT INTO `system_req_log` VALUES ('914', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"qty\":2,\"goodSpecId\":2}]}', '/api/member/order/save', 'POST', '200', '26', '2021-01-16 15:50:07', '2021-01-16 15:50:07');
INSERT INTO `system_req_log` VALUES ('915', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":1,\"qty\":2,\"goodSpecId\":2}]}', '/api/member/order/save', 'POST', '200', '56', '2021-01-16 16:06:38', '2021-01-16 16:06:38');
INSERT INTO `system_req_log` VALUES ('916', '127.0.0.1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":16,\"qty\":2,\"goodSpecId\":2}]}', '/api/member/order/save', 'POST', '500', '40', '2021-01-16 16:11:08', '2021-01-16 16:11:08');
INSERT INTO `system_req_log` VALUES ('917', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":16,\"qty\":2,\"goodSpecId\":2}]}', '/api/member/order/save', 'POST', '500', '44', '2021-01-16 16:11:12', '2021-01-16 16:11:12');
INSERT INTO `system_req_log` VALUES ('918', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":16,\"qty\":2,\"goodSpecId\":2}]}', '/api/member/order/save', 'POST', '500', '34', '2021-01-16 16:11:25', '2021-01-16 16:11:25');
INSERT INTO `system_req_log` VALUES ('919', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":16,\"qty\":2,\"goodSpecId\":2}]}', '/api/member/order/save', 'POST', '500', '18', '2021-01-16 16:11:27', '2021-01-16 16:11:27');
INSERT INTO `system_req_log` VALUES ('920', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":16,\"qty\":2,\"goodSpecId\":2}]}', '/api/member/order/save', 'POST', '500', '28', '2021-01-16 16:11:27', '2021-01-16 16:11:27');
INSERT INTO `system_req_log` VALUES ('921', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":16,\"qty\":2,\"goodSpecId\":2}]}', '/api/member/order/save', 'POST', '500', '18', '2021-01-16 16:11:28', '2021-01-16 16:11:28');
INSERT INTO `system_req_log` VALUES ('922', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":16,\"qty\":2,\"goodSpecId\":2}]}', '/api/member/order/save', 'POST', '200', '44', '2021-01-16 16:11:29', '2021-01-16 16:11:29');
INSERT INTO `system_req_log` VALUES ('923', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":16,\"qty\":2,\"goodSpecId\":2}]}', '/api/member/order/save', 'POST', '200', '41', '2021-01-16 16:12:21', '2021-01-16 16:12:21');
INSERT INTO `system_req_log` VALUES ('924', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":16,\"qty\":2,\"goodSpecId\":2}]}', '/api/member/order/save', 'POST', '200', '42', '2021-01-16 16:13:14', '2021-01-16 16:13:14');
INSERT INTO `system_req_log` VALUES ('925', '::1', '1', '{\"addressId\":4,\"merchantId\":1,\"remark\":\"备注\",\"goodList\":[{\"id\":16,\"qty\":2,\"goodSpecId\":2}]}', '/api/member/order/save', 'POST', '200', '130', '2021-01-16 16:14:34', '2021-01-16 16:14:34');
INSERT INTO `system_req_log` VALUES ('926', '::1', '2', '{\"username\":\"tcy\",\"password\":\"123456\"}', '/api/user/login', 'POST', '200', '46', '2021-01-16 21:00:09', '2021-01-16 21:00:09');
INSERT INTO `system_req_log` VALUES ('927', '::1', '1', '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/user/login', 'POST', '200', '21', '2021-01-16 21:06:25', '2021-01-16 21:06:25');
INSERT INTO `system_req_log` VALUES ('928', '::1', null, '{\"parentId\":13,\"name\":\"广告图\",\"url\":\"/setting/banner\"}', '/api/menu/save', 'POST', '200', '30', '2021-01-16 21:07:02', '2021-01-16 21:07:02');
INSERT INTO `system_req_log` VALUES ('929', '::1', null, '[{\"id\":1,\"name\":\"系统管理\",\"url\":\"/system\",\"icon\":null,\"parentId\":null,\"sort\":null,\"status\":1,\"createdAt\":null,\"updatedAt\":\"2020-12-10 14:46:18\",\"children\":[{\"id\":2,\"name\":\"菜单管理\",\"url\":\"/system/menu\",\"icon\":null,\"parentId\":1,\"sort\":null,\"status\":1,\"createdAt\":\"2020-08-24 10:14:58\",\"updatedAt\":\"2020-08-24 10:14:58\",\"children\":[]},{\"id\":4,\"name\":\"用户管理\",\"url\":\"/system/user\",\"icon\":\"\",\"parentId\":1,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 14:45:01\",\"updatedAt\":\"2020-12-10 14:45:01\",\"children\":[]},{\"id\":5,\"name\":\"角色管理\",\"url\":\"/system/role\",\"icon\":null,\"parentId\":1,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 14:45:16\",\"updatedAt\":\"2020-12-10 14:46:46\",\"children\":[]},{\"id\":6,\"name\":\"文件管理\",\"url\":\"/system/file\",\"icon\":null,\"parentId\":1,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 14:45:29\",\"updatedAt\":\"2020-12-10 14:45:29\",\"children\":[]},{\"id\":12,\"name\":\"日志管理\",\"url\":\"/system/log\",\"icon\":null,\"parentId\":1,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-11 09:47:22\",\"updatedAt\":\"2020-12-11 09:47:22\",\"children\":[]}]},{\"id\":7,\"name\":\"商家管理\",\"url\":\"/merchant\",\"icon\":\"\",\"parentId\":null,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 15:49:44\",\"updatedAt\":\"2020-12-10 15:49:44\",\"children\":[{\"id\":8,\"name\":\"商家列表\",\"url\":\"/merchant/merchant\",\"icon\":null,\"parentId\":7,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 15:50:00\",\"updatedAt\":\"2020-12-10 15:50:00\",\"children\":[]}]},{\"id\":9,\"name\":\"商品管理\",\"url\":\"/good\",\"icon\":\"\",\"parentId\":null,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 17:02:08\",\"updatedAt\":\"2020-12-10 17:02:08\",\"children\":[{\"id\":10,\"name\":\"商品列表\",\"url\":\"/good/list\",\"icon\":null,\"parentId\":9,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 17:02:22\",\"updatedAt\":\"2020-12-10 17:02:22\",\"children\":[],\"checked\":true},{\"id\":11,\"name\":\"商品分类\",\"url\":\"/good/category\",\"icon\":null,\"parentId\":9,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 17:21:35\",\"updatedAt\":\"2020-12-10 17:21:35\",\"children\":[],\"checked\":true}],\"checked\":true},{\"id\":13,\"name\":\"设置\",\"url\":\"/setting\",\"icon\":\"\",\"parentId\":null,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-12 14:33:35\",\"updatedAt\":\"2020-12-12 14:33:35\",\"children\":[{\"id\":14,\"name\":\"个人设置\",\"url\":\"/setting/person\",\"icon\":null,\"parentId\":13,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-12 14:33:48\",\"updatedAt\":\"2020-12-12 14:33:48\",\"children\":[],\"checked\":true},{\"id\":15,\"name\":\"店铺资料\",\"url\":\"/setting/shop\",\"icon\":null,\"parentId\":13,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-12 14:48:10\",\"updatedAt\":\"2020-12-12 14:48:10\",\"children\":[],\"checked\":true},{\"id\":18,\"name\":\"广告图\",\"url\":\"/setting/banner\",\"icon\":null,\"parentId\":13,\"sort\":null,\"status\":1,\"createdAt\":\"2021-01-16 21:07:02\",\"updatedAt\":\"2021-01-16 21:07:02\",\"children\":[],\"checked\":true}],\"checked\":true},{\"id\":16,\"name\":\"订单管理\",\"url\":\"/order\",\"icon\":\"\",\"parentId\":null,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-16 20:27:42\",\"updatedAt\":\"2020-12-16 20:27:42\",\"children\":[{\"id\":17,\"name\":\"订单列表\",\"url\":\"/order/list\",\"icon\":null,\"parentId\":16,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-16 20:27:56\",\"updatedAt\":\"2020-12-16 20:27:56\",\"children\":[],\"checked\":true}],\"checked\":true}]', '/api/role/2/menu', 'POST', '200', '48', '2021-01-16 21:07:09', '2021-01-16 21:07:09');
INSERT INTO `system_req_log` VALUES ('930', '::1', '1', '{\"imageId\":\"1\"}', '/api/shop/banner/save', 'POST', '400', '15', '2021-01-16 21:10:18', '2021-01-16 21:10:18');
INSERT INTO `system_req_log` VALUES ('931', '::1', '1', '{\"imageId\":1}', '/api/shop/banner/save', 'POST', '400', '20', '2021-01-16 21:10:32', '2021-01-16 21:10:32');
INSERT INTO `system_req_log` VALUES ('932', '::1', '1', '{\"imageId\":1,\"merchantId\":1}', '/api/shop/banner/save', 'POST', '200', '43', '2021-01-16 21:10:58', '2021-01-16 21:10:58');
INSERT INTO `system_req_log` VALUES ('933', '::1', null, '{}', '/api/file/upload', 'POST', '200', '90', '2021-01-16 21:31:12', '2021-01-16 21:31:12');
INSERT INTO `system_req_log` VALUES ('934', '::1', null, '{}', '/api/file/upload', 'POST', '200', '97', '2021-01-16 21:31:37', '2021-01-16 21:31:37');
INSERT INTO `system_req_log` VALUES ('935', '::1', null, '{}', '/api/file/upload', 'POST', '200', '91', '2021-01-16 21:32:06', '2021-01-16 21:32:06');
INSERT INTO `system_req_log` VALUES ('936', '::1', null, '{}', '/api/file/upload', 'POST', '200', '103', '2021-01-16 21:33:13', '2021-01-16 21:33:13');
INSERT INTO `system_req_log` VALUES ('937', '::1', null, '{}', '/api/file/upload', 'POST', '200', '118', '2021-01-16 21:33:51', '2021-01-16 21:33:51');
INSERT INTO `system_req_log` VALUES ('938', '::1', null, '{\"url\":\"\",\"sort\":\"\",\"status\":1,\"mechantId\":1,\"imageId\":80}', '/api/shop/banner/save', 'POST', '400', '13', '2021-01-16 21:33:52', '2021-01-16 21:33:52');
INSERT INTO `system_req_log` VALUES ('939', '::1', null, '{}', '/api/file/upload', 'POST', '200', '37', '2021-01-16 21:34:21', '2021-01-16 21:34:21');
INSERT INTO `system_req_log` VALUES ('940', '::1', null, '{\"url\":\"\",\"status\":1,\"mechantId\":1,\"imageId\":81}', '/api/shop/banner/save', 'POST', '400', '10', '2021-01-16 21:34:22', '2021-01-16 21:34:22');
INSERT INTO `system_req_log` VALUES ('941', '::1', null, '{}', '/api/file/upload', 'POST', '200', '29', '2021-01-16 21:35:07', '2021-01-16 21:35:07');
INSERT INTO `system_req_log` VALUES ('942', '::1', null, '{\"url\":\"\",\"status\":1,\"merchantId\":1,\"imageId\":82}', '/api/shop/banner/save', 'POST', '200', '18', '2021-01-16 21:35:08', '2021-01-16 21:35:08');
INSERT INTO `system_req_log` VALUES ('943', '::1', null, '{}', '/api/shop/banner/1', 'DELETE', '200', '30', '2021-01-16 21:36:42', '2021-01-16 21:36:42');
INSERT INTO `system_req_log` VALUES ('944', '::1', null, '{}', '/api/shop/banner/2', 'DELETE', '200', '27', '2021-01-16 21:36:44', '2021-01-16 21:36:44');
INSERT INTO `system_req_log` VALUES ('945', '::1', null, '{}', '/api/file/upload', 'POST', '200', '26', '2021-01-16 21:37:13', '2021-01-16 21:37:13');
INSERT INTO `system_req_log` VALUES ('946', '::1', null, '{\"url\":\"\",\"status\":1,\"merchantId\":1,\"imageId\":83}', '/api/shop/banner/save', 'POST', '200', '18', '2021-01-16 21:37:15', '2021-01-16 21:37:15');
INSERT INTO `system_req_log` VALUES ('947', '::1', null, '{}', '/api/file/upload', 'POST', '200', '50', '2021-01-16 21:37:24', '2021-01-16 21:37:24');
INSERT INTO `system_req_log` VALUES ('948', '::1', null, '{\"url\":\"\",\"status\":1,\"merchantId\":1,\"imageId\":84}', '/api/shop/banner/save', 'POST', '200', '11', '2021-01-16 21:37:24', '2021-01-16 21:37:24');
INSERT INTO `system_req_log` VALUES ('949', '::1', null, '{\"id\":3,\"url\":\"\",\"sort\":\"5\",\"merchantId\":1,\"status\":1,\"imageId\":83,\"createdAt\":\"2021-01-16 21:37:15\",\"updatedAt\":\"2021-01-16 21:37:15\",\"image\":{\"id\":83,\"format\":\"image/jpeg\",\"url\":\"http://localhost:7001/public/uploads/2021/01/16/1610804233531567.5261065878891.jpg\",\"path\":\"app\\\\public\\\\uploads\\\\2021\\\\01\\\\16\\\\1610804233531567.5261065878891.jpg\",\"size\":85944,\"name\":\"1610804233531567.5261065878891.jpg\",\"type\":\"image\",\"creator\":null,\"createdAt\":\"2021-01-16 21:37:13\",\"updatedAt\":\"2021-01-16 21:37:13\",\"uid\":1610804533451,\"status\":\"success\"}}', '/api/shop/banner/save', 'POST', '200', '36', '2021-01-16 21:42:20', '2021-01-16 21:42:20');
INSERT INTO `system_req_log` VALUES ('950', '::1', null, '{\"id\":4,\"url\":\"\",\"sort\":\"8\",\"merchantId\":1,\"status\":1,\"imageId\":84,\"createdAt\":\"2021-01-16 21:37:24\",\"updatedAt\":\"2021-01-16 21:37:24\",\"image\":{\"id\":84,\"format\":\"image/jpeg\",\"url\":\"http://localhost:7001/public/uploads/2021/01/16/1610804243994930.8798108642115.jpg\",\"path\":\"app\\\\public\\\\uploads\\\\2021\\\\01\\\\16\\\\1610804243994930.8798108642115.jpg\",\"size\":16195,\"name\":\"1610804243994930.8798108642115.jpg\",\"type\":\"image\",\"creator\":null,\"createdAt\":\"2021-01-16 21:37:24\",\"updatedAt\":\"2021-01-16 21:37:24\",\"uid\":1610804542918,\"status\":\"success\"}}', '/api/shop/banner/save', 'POST', '200', '12', '2021-01-16 21:42:26', '2021-01-16 21:42:26');
INSERT INTO `system_req_log` VALUES ('951', '::1', null, '{\"id\":16,\"name\":\"童装套装\",\"description\":\"\",\"content\":\"\",\"thumbnail\":75,\"categoryId\":39,\"mechantId\":1,\"salePrice\":150,\"marketPrice\":89,\"sales\":0,\"status\":1,\"tags\":\"新品\",\"createdAt\":\"2020-12-15 20:46:41\",\"updatedAt\":\"2020-12-15 20:46:41\",\"category\":{\"id\":39,\"name\":\"婴童衣橱\",\"description\":\"\",\"imageId\":70,\"parentId\":16,\"merchantId\":1,\"status\":1,\"createdAt\":\"2020-12-13 17:08:20\",\"updatedAt\":\"2020-12-13 17:08:20\"},\"thumbnailImage\":{\"id\":75,\"format\":\"image/png\",\"url\":\"/public/uploads/2020/12/15/1608036369981975.2750883626092.png\",\"path\":\"app\\\\public\\\\uploads\\\\2020\\\\12\\\\15\\\\1608036369981975.2750883626092.png\",\"size\":113592,\"name\":\"1608036369981975.2750883626092.png\",\"type\":\"image\",\"creator\":null,\"createdAt\":\"2020-12-15 20:46:09\",\"updatedAt\":\"2020-12-15 20:46:09\"},\"isFav\":false,\"images\":[{\"id\":75,\"format\":\"image/png\",\"url\":\"http://localhost:7001/public/uploads/2020/12/15/1608036369981975.2750883626092.png\",\"path\":\"app\\\\public\\\\uploads\\\\2020\\\\12\\\\15\\\\1608036369981975.2750883626092.png\",\"size\":113592,\"name\":\"1608036369981975.2750883626092.png\",\"type\":\"image\",\"creator\":null,\"createdAt\":\"2020-12-15 20:46:09\",\"updatedAt\":\"2020-12-15 20:46:09\",\"isDefault\":true,\"uid\":1610848240873,\"status\":\"success\"}],\"specs\":[{\"id\":6,\"name\":\"黑色\",\"description\":null,\"pic\":null,\"salePrice\":150,\"marketPrice\":89,\"stock\":999,\"sales\":0,\"goodId\":16,\"mechantId\":1,\"createdAt\":\"2020-12-15 20:46:41\",\"updatedAt\":\"2020-12-15 20:46:41\"},{\"id\":7,\"name\":\"白色\",\"description\":null,\"pic\":null,\"salePrice\":160,\"marketPrice\":99,\"stock\":800,\"sales\":0,\"goodId\":16,\"mechantId\":1,\"createdAt\":\"2020-12-15 20:46:41\",\"updatedAt\":\"2020-12-15 20:46:41\"}]}', '/api/good/save', 'POST', '200', '98', '2021-01-17 09:50:47', '2021-01-17 09:50:47');
INSERT INTO `system_req_log` VALUES ('952', '::1', null, '{\"parentId\":1,\"name\":\"权限管理\",\"url\":\"/system/permission\"}', '/api/menu/save', 'POST', '200', '114', '2021-01-17 19:41:13', '2021-01-17 19:41:13');
INSERT INTO `system_req_log` VALUES ('953', '::1', null, '[{\"id\":1,\"name\":\"系统管理\",\"url\":\"/system\",\"icon\":null,\"parentId\":null,\"sort\":null,\"status\":1,\"createdAt\":null,\"updatedAt\":\"2020-12-10 14:46:18\",\"children\":[{\"id\":2,\"name\":\"菜单管理\",\"url\":\"/system/menu\",\"icon\":null,\"parentId\":1,\"sort\":null,\"status\":1,\"createdAt\":\"2020-08-24 10:14:58\",\"updatedAt\":\"2020-08-24 10:14:58\",\"children\":[],\"checked\":true},{\"id\":4,\"name\":\"用户管理\",\"url\":\"/system/user\",\"icon\":\"\",\"parentId\":1,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 14:45:01\",\"updatedAt\":\"2020-12-10 14:45:01\",\"children\":[],\"checked\":true},{\"id\":5,\"name\":\"角色管理\",\"url\":\"/system/role\",\"icon\":null,\"parentId\":1,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 14:45:16\",\"updatedAt\":\"2020-12-10 14:46:46\",\"children\":[],\"checked\":true},{\"id\":6,\"name\":\"文件管理\",\"url\":\"/system/file\",\"icon\":null,\"parentId\":1,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 14:45:29\",\"updatedAt\":\"2020-12-10 14:45:29\",\"children\":[],\"checked\":true},{\"id\":12,\"name\":\"日志管理\",\"url\":\"/system/log\",\"icon\":null,\"parentId\":1,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-11 09:47:22\",\"updatedAt\":\"2020-12-11 09:47:22\",\"children\":[],\"checked\":true},{\"id\":19,\"name\":\"权限管理\",\"url\":\"/system/permission\",\"icon\":null,\"parentId\":1,\"sort\":null,\"status\":1,\"createdAt\":\"2021-01-17 19:41:13\",\"updatedAt\":\"2021-01-17 19:41:13\",\"children\":[],\"checked\":true}],\"checked\":true},{\"id\":7,\"name\":\"商家管理\",\"url\":\"/merchant\",\"icon\":\"\",\"parentId\":null,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 15:49:44\",\"updatedAt\":\"2020-12-10 15:49:44\",\"children\":[{\"id\":8,\"name\":\"商家列表\",\"url\":\"/merchant/merchant\",\"icon\":null,\"parentId\":7,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 15:50:00\",\"updatedAt\":\"2020-12-10 15:50:00\",\"children\":[],\"checked\":true}],\"checked\":true},{\"id\":9,\"name\":\"商品管理\",\"url\":\"/good\",\"icon\":\"\",\"parentId\":null,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 17:02:08\",\"updatedAt\":\"2020-12-10 17:02:08\",\"children\":[{\"id\":10,\"name\":\"商品列表\",\"url\":\"/good/list\",\"icon\":null,\"parentId\":9,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 17:02:22\",\"updatedAt\":\"2020-12-10 17:02:22\",\"children\":[]},{\"id\":11,\"name\":\"商品分类\",\"url\":\"/good/category\",\"icon\":null,\"parentId\":9,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-10 17:21:35\",\"updatedAt\":\"2020-12-10 17:21:35\",\"children\":[]}]},{\"id\":13,\"name\":\"设置\",\"url\":\"/setting\",\"icon\":\"\",\"parentId\":null,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-12 14:33:35\",\"updatedAt\":\"2020-12-12 14:33:35\",\"children\":[{\"id\":14,\"name\":\"个人设置\",\"url\":\"/setting/person\",\"icon\":null,\"parentId\":13,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-12 14:33:48\",\"updatedAt\":\"2020-12-12 14:33:48\",\"children\":[],\"checked\":true},{\"id\":15,\"name\":\"店铺资料\",\"url\":\"/setting/shop\",\"icon\":null,\"parentId\":13,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-12 14:48:10\",\"updatedAt\":\"2020-12-12 14:48:10\",\"children\":[]},{\"id\":18,\"name\":\"广告图\",\"url\":\"/setting/banner\",\"icon\":null,\"parentId\":13,\"sort\":null,\"status\":1,\"createdAt\":\"2021-01-16 21:07:02\",\"updatedAt\":\"2021-01-16 21:07:02\",\"children\":[]}],\"checked\":true},{\"id\":16,\"name\":\"订单管理\",\"url\":\"/order\",\"icon\":\"\",\"parentId\":null,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-16 20:27:42\",\"updatedAt\":\"2020-12-16 20:27:42\",\"children\":[{\"id\":17,\"name\":\"订单列表\",\"url\":\"/order/list\",\"icon\":null,\"parentId\":16,\"sort\":null,\"status\":1,\"createdAt\":\"2020-12-16 20:27:56\",\"updatedAt\":\"2020-12-16 20:27:56\",\"children\":[]}]}]', '/api/role/1/menu', 'POST', '200', '43', '2021-01-17 19:41:20', '2021-01-17 19:41:20');
INSERT INTO `system_req_log` VALUES ('954', '::1', '1', '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/user/login', 'POST', '200', '25', '2021-01-17 20:09:27', '2021-01-17 20:09:27');
INSERT INTO `system_req_log` VALUES ('955', '::1', null, '{\"id\":\"system_role\",\"name\":\"角色管理\",\"actions\":\"query,add,delete,detail\"}', '/api/permission/save', 'POST', '200', '49', '2021-01-17 20:38:31', '2021-01-17 20:38:31');
INSERT INTO `system_req_log` VALUES ('956', '::1', '1', '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/user/login', 'POST', '200', '30', '2021-01-17 20:52:19', '2021-01-17 20:52:19');
INSERT INTO `system_req_log` VALUES ('957', '::1', '1', '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/user/login', 'POST', '200', '37', '2021-01-17 20:54:52', '2021-01-17 20:54:52');
INSERT INTO `system_req_log` VALUES ('958', '::1', '1', '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/user/login', 'POST', '400', '53', '2021-01-17 20:55:38', '2021-01-17 20:55:38');
INSERT INTO `system_req_log` VALUES ('959', '::1', '1', '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/user/login', 'POST', '400', '21', '2021-01-17 20:55:52', '2021-01-17 20:55:52');
INSERT INTO `system_req_log` VALUES ('960', '::1', '1', '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/user/login', 'POST', '200', '40', '2021-01-17 20:57:56', '2021-01-17 20:57:56');
INSERT INTO `system_req_log` VALUES ('961', '::1', null, '{}', '/api/system/menu/3666', 'DELETE', '200', '16', '2021-05-20 20:39:18', '2021-05-20 20:39:18');
INSERT INTO `system_req_log` VALUES ('962', '::1', null, '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/user/login', 'POST', '404', '2', '2021-05-20 20:43:51', '2021-05-20 20:43:51');
INSERT INTO `system_req_log` VALUES ('963', '::1', null, '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/system/user/login', 'POST', '400', '122', '2021-05-20 20:44:53', '2021-05-20 20:44:53');
INSERT INTO `system_req_log` VALUES ('964', '::1', null, '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/system/user/login', 'POST', '500', '86', '2021-05-20 20:46:40', '2021-05-20 20:46:40');
INSERT INTO `system_req_log` VALUES ('965', '::1', null, '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/system/user/login', 'POST', '500', '32', '2021-05-20 20:46:43', '2021-05-20 20:46:43');
INSERT INTO `system_req_log` VALUES ('966', '::1', null, '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/system/user/login', 'POST', '200', '84', '2021-05-20 20:47:29', '2021-05-20 20:47:29');
INSERT INTO `system_req_log` VALUES ('967', '::1', null, '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/system/user/login', 'POST', '200', '29', '2021-05-20 20:47:32', '2021-05-20 20:47:32');
INSERT INTO `system_req_log` VALUES ('968', '::1', null, '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/system/user/login', 'POST', '200', '69', '2021-05-20 20:47:38', '2021-05-20 20:47:38');
INSERT INTO `system_req_log` VALUES ('969', '::1', null, '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/system/user/login', 'POST', '200', '44', '2021-05-20 20:49:50', '2021-05-20 20:49:50');
INSERT INTO `system_req_log` VALUES ('970', '::1', null, '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/system/user/login', 'POST', '200', '82', '2021-05-20 20:50:56', '2021-05-20 20:50:56');
INSERT INTO `system_req_log` VALUES ('971', '::1', null, '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/system/user/login', 'POST', '200', '56', '2021-05-20 20:52:07', '2021-05-20 20:52:07');
INSERT INTO `system_req_log` VALUES ('972', '::1', null, '{\"username\":\"admin\",\"password\":\"123456\"}', '/api/system/user/login', 'POST', '200', '43', '2021-05-20 20:52:16', '2021-05-20 20:52:16');
INSERT INTO `system_req_log` VALUES ('973', '::1', '1', '{\"username\":\"tcy\",\"password\":\"123456\"}', '/api/system/user/login', 'POST', '200', '38', '2021-05-20 21:08:07', '2021-05-20 21:08:07');

-- ----------------------------
-- Table structure for system_role
-- ----------------------------
DROP TABLE IF EXISTS `system_role`;
CREATE TABLE `system_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `describe` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of system_role
-- ----------------------------
INSERT INTO `system_role` VALUES ('1', '管理员', null, '1', '2020-08-23 13:55:19', '2020-11-23 11:14:54');
INSERT INTO `system_role` VALUES ('2', '商家', null, '1', '2020-08-24 10:12:46', '2020-12-10 16:50:59');
INSERT INTO `system_role` VALUES ('5', '用户', null, '1', '2020-11-23 11:14:08', '2020-12-10 16:51:05');

-- ----------------------------
-- Table structure for system_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `system_role_menu`;
CREATE TABLE `system_role_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of system_role_menu
-- ----------------------------
INSERT INTO `system_role_menu` VALUES ('60', '2', '9', '2021-01-16 21:07:09', '2021-01-16 21:07:09');
INSERT INTO `system_role_menu` VALUES ('61', '2', '10', '2021-01-16 21:07:09', '2021-01-16 21:07:09');
INSERT INTO `system_role_menu` VALUES ('62', '2', '11', '2021-01-16 21:07:09', '2021-01-16 21:07:09');
INSERT INTO `system_role_menu` VALUES ('63', '2', '13', '2021-01-16 21:07:09', '2021-01-16 21:07:09');
INSERT INTO `system_role_menu` VALUES ('64', '2', '14', '2021-01-16 21:07:09', '2021-01-16 21:07:09');
INSERT INTO `system_role_menu` VALUES ('65', '2', '15', '2021-01-16 21:07:09', '2021-01-16 21:07:09');
INSERT INTO `system_role_menu` VALUES ('66', '2', '18', '2021-01-16 21:07:09', '2021-01-16 21:07:09');
INSERT INTO `system_role_menu` VALUES ('67', '2', '16', '2021-01-16 21:07:09', '2021-01-16 21:07:09');
INSERT INTO `system_role_menu` VALUES ('68', '2', '17', '2021-01-16 21:07:09', '2021-01-16 21:07:09');
INSERT INTO `system_role_menu` VALUES ('69', '1', '1', '2021-01-17 19:41:20', '2021-01-17 19:41:20');
INSERT INTO `system_role_menu` VALUES ('70', '1', '2', '2021-01-17 19:41:20', '2021-01-17 19:41:20');
INSERT INTO `system_role_menu` VALUES ('71', '1', '4', '2021-01-17 19:41:20', '2021-01-17 19:41:20');
INSERT INTO `system_role_menu` VALUES ('72', '1', '5', '2021-01-17 19:41:20', '2021-01-17 19:41:20');
INSERT INTO `system_role_menu` VALUES ('73', '1', '6', '2021-01-17 19:41:20', '2021-01-17 19:41:20');
INSERT INTO `system_role_menu` VALUES ('74', '1', '12', '2021-01-17 19:41:20', '2021-01-17 19:41:20');
INSERT INTO `system_role_menu` VALUES ('75', '1', '19', '2021-01-17 19:41:20', '2021-01-17 19:41:20');
INSERT INTO `system_role_menu` VALUES ('76', '1', '7', '2021-01-17 19:41:20', '2021-01-17 19:41:20');
INSERT INTO `system_role_menu` VALUES ('77', '1', '8', '2021-01-17 19:41:20', '2021-01-17 19:41:20');
INSERT INTO `system_role_menu` VALUES ('78', '1', '13', '2021-01-17 19:41:20', '2021-01-17 19:41:20');
INSERT INTO `system_role_menu` VALUES ('79', '1', '14', '2021-01-17 19:41:20', '2021-01-17 19:41:20');

-- ----------------------------
-- Table structure for system_role_permission
-- ----------------------------
DROP TABLE IF EXISTS `system_role_permission`;
CREATE TABLE `system_role_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
  `permission_id` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `actions` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of system_role_permission
-- ----------------------------
INSERT INTO `system_role_permission` VALUES ('1', '1', 'user', 'query,add', '2020-08-27 10:27:31', '2020-08-27 10:27:31');

-- ----------------------------
-- Table structure for system_user
-- ----------------------------
DROP TABLE IF EXISTS `system_user`;
CREATE TABLE `system_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sex` int(1) DEFAULT '1',
  `avatar_id` int(11) DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT '1' COMMENT '用户状态： 0:禁用, 1:启用,',
  `last_login_time` int(11) DEFAULT NULL,
  `last_login_ip` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `company` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `department` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `unionid` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `openid` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `type` int(3) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of system_user
-- ----------------------------
INSERT INTO `system_user` VALUES ('1', 'admin', null, 'e10adc3949ba59abbe56e057f20f883e', '管理员1', '2', '34', null, '1', '1', null, null, null, null, null, null, '2020-08-23 08:10:20', '2020-12-12 14:30:08', '1');
INSERT INTO `system_user` VALUES ('2', 'tcy', null, 'e10adc3949ba59abbe56e057f20f883e', '良品铺子', '1', '35', null, '2', '1', null, null, null, null, null, null, '2020-08-23 08:10:20', '2020-12-13 21:40:22', '2');

-- ----------------------------
-- Table structure for user_address
-- ----------------------------
DROP TABLE IF EXISTS `user_address`;
CREATE TABLE `user_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `province` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `district` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `township` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `place` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `link_man` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `link_phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `is_default` tinyint(1) DEFAULT '0',
  `longitude` double DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user_address
-- ----------------------------
INSERT INTO `user_address` VALUES ('1', '湖北省', '武汉市', '江岸区', null, '汉口沿江大道182号粤汉码头(近两江游览及江滩公园)(武汉江城明珠豪生大酒店)', 'ttt', '13656666564', '0', null, null, '2', '2020-12-13 14:39:09', '2021-01-16 14:16:30');
INSERT INTO `user_address` VALUES ('2', '湖北省', '武汉市', '武昌区', null, '友谊大道368号(湖北大学(武昌主校区))', '涂重阳', '18707133663', '0', null, null, '2', '2020-12-13 14:17:45', '2021-01-16 14:16:30');
INSERT INTO `user_address` VALUES ('3', '湖北省', '武汉市', '江岸区', null, '汉口武汉客运港旁(汉口江滩)', 'hxy', '13333333333', '0', null, null, '2', '2020-12-13 14:36:10', '2021-01-16 14:16:30');
INSERT INTO `user_address` VALUES ('4', '湖北省', '武汉市', '江夏区', null, '高新五路', '涂重阳', '18707133663', '1', null, null, '1', '2021-01-16 14:07:17', '2021-01-16 14:16:30');

-- ----------------------------
-- Table structure for user_fav
-- ----------------------------
DROP TABLE IF EXISTS `user_fav`;
CREATE TABLE `user_fav` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `good_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_fav
-- ----------------------------
INSERT INTO `user_fav` VALUES ('1', '1', '1', '2021-01-16 14:45:07', '2021-01-16 14:45:07');
