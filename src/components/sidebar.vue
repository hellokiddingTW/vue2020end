<template>
  <div>
     <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">        
        <h5 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h5>
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link" :class="{'active' : 'isActive'}" @click.prevent="isActive = !isActive">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link">訂單列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupon" class="nav-link" :class="{'active' : 'isActive'}" @click.prevent="isActive = !isActive">優惠卷</router-link>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>模擬功能</span>
          <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link to="admin/product" class="nav-link">模擬訂單</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive:false
    };
  },
};
</script>
