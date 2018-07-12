<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wpadmin');

/** MySQL database password */
define('DB_PASSWORD', 'admin');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '7k{D4S75Hg2rIaW1a~e,xUh}cOd!l}!k;6nhS%RV* ;VPe(Qhy4d.MPE;i_Bf/NU');
define('SECURE_AUTH_KEY',  'y+_!ru9oy[p69H3hoJX| mY}I;t9uN@q}Tg<ZATa-N`]=b.yl8XS6JHP3c]vGH_L');
define('LOGGED_IN_KEY',    'dI-#$ mavik)ppKto9py)kg404[p5; ~Ml+hupmg:88+lDcPl#kc:g[T-+L*qaBH');
define('NONCE_KEY',        'zfC0^6/l;3ilC}(HU5&q xr)vY|qz*SFN.ddVRRwDA<O|q[0FwGD$%3z}|i-dz~x');
define('AUTH_SALT',        'OcufET_t|*W5*)7HQrDi}ee38=Icfw+(SbAfGqLwrl&E+Ir#OY`YD$-NT&nK`fkD');
define('SECURE_AUTH_SALT', '*4<=DMjmp Y6BF<0wbnZk6rP<5RC!Jb_q#$^(msg=zB+i>3NBXG*5(H8Z)6j_>C*');
define('LOGGED_IN_SALT',   'Z6E=*@b&7YOFz2&XDZT^Db_5b;(Y<@{>Mmw5e<p=7E[`7dws|A2fkDT+$<z]h4W.');
define('NONCE_SALT',       '!`Xd,ss53J]4dN!}!CD>h/ZQOZ}w|H5+#%~C^s$m$*.}gm|?cut[49@B<NF6uj-:');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
