<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package resto
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
      <div id="main-banner">
          <img src="<?php echo(get_template_directory_uri())?>/images/banner.png" alt="Welcome to Resto">
      </div>
      <div class="wrapper">
        <section id="home-menu">
            <h2>Menu</h2>
            <ul>
              <li>
                  <span class="dish">Voluptate Cillum Fugiat</span>
                  <span class="price">$38</span>
                  <span class="description">
                    Cheese, Tomato, Mashrooms, Onions
                  </span>
              </li>
              <li>
                  <span class="dish">Voluptate Cillum Fugiat</span>
                  <span class="price">$38</span>
                  <span class="description">
                    Cheese, Tomato, Mashrooms, Onions
                  </span>
              </li>
              <li>
                  <span class="dish">Voluptate Cillum Fugiat</span>
                  <span class="price">$38</span>
                  <span class="description">
                    Cheese, Tomato, Mashrooms, Onions
                  </span>
              </li>
              <li>
                  <span class="dish">Voluptate Cillum Fugiat</span>
                  <span class="price">$38</span>
                  <span class="description">
                    Cheese, Tomato, Mashrooms, Onions
                  </span>
              </li>
              <li>
                  <span class="dish">Voluptate Cillum Fugiat</span>
                  <span class="price">$38</span>
                  <span class="description">
                    Cheese, Tomato, Mashrooms, Onions
                  </span>
              </li>
              <li>
                  <span class="dish">Voluptate Cillum Fugiat</span>
                  <span class="price">$38</span>
                  <span class="description">
                    Cheese, Tomato, Mashrooms, Onions
                  </span>
              </li>
              <li>
                  <span class="dish">Voluptate Cillum Fugiat</span>
                  <span class="price">$38</span>
                  <span class="description">
                    Cheese, Tomato, Mashrooms, Onions
                  </span>
              </li>
              <li>
                  <span class="dish">Voluptate Cillum Fugiat</span>
                  <span class="price">$38</span>
                  <span class="description">
                    Cheese, Tomato, Mashrooms, Onions
                  </span>
              </li>
            </ul>
        </section>

        <section id="featured">
          <ul>
            <li>
                <img src="<?php echo(get_template_directory_uri())?>/images/thumb-1.jpg" alt="">
                <a href="">Fugiat mulla sint</a>
                <span>$38</span>
                <span class="rating"></span>
            </li>
            <li>
                <img src="<?php echo(get_template_directory_uri())?>/images/thumb-1.jpg" alt="">
                <a href="">Fugiat mulla sint</a>
                <span>$38</span>
                <span class="rating"></span>
            </li>
            <li>
                <img src="<?php echo(get_template_directory_uri())?>/images/thumb-1.jpg" alt="">
                <a href="">Fugiat mulla sint</a>
                <span>$38</span>
                <span class="rating"></span>
            </li>
            <li>
                <img src="<?php echo(get_template_directory_uri())?>/images/thumb-1.jpg" alt="">
                <a href="">Fugiat mulla sint</a>
                <span>$38</span>
                <span class="rating"></span>
            </li>
          </ul>
        </section>
      </div>
      <!--End homepage content-->
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
