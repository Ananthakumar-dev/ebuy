const page = () => {
  return (
    <div className="w-full px-2 md:px-0 py-2 max-h-[calc(100dvh-90px)] overflow-auto">
      <h1 className="text-2xl font-semibold border-b pb-2">Add new product</h1>

      <form action="" className="flex flex-col md:flex-row mt-2 gap-1">
        <section className="w-full md:w-3/5">
          <div className="p-6 card">
            <h2 className="text-xl font-semibold border-b pb-2 mb-2">
              Product Information
            </h2>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="name"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                Product name <em className="text-btn">*</em>
              </label>

              <input
                type="text"
                name="name"
                id="name"
                className="form-input w-full"
                placeholder="Product name"
              />
            </div>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="description"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                Description <em className="text-btn">*</em>
              </label>

              <textarea
                name="description"
                id="description"
                className="form-input w-full h-auto"
                placeholder="Product description"
                rows={8}
              ></textarea>
            </div>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="category"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                Category <em className="text-btn">*</em>
              </label>

              <select
                className="form-input w-full"
                id="category"
                name="category"
              >
                <option value="">Select</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="brand"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                Brand <em className="text-btn">*</em>
              </label>

              <select className="form-input w-full" name="brand" id="brand">
                <option value="">Select</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="unit"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                Unit <em className="text-btn">*</em>
              </label>

              <input
                type="text"
                name="unit"
                id="unit"
                className="form-input w-full"
                placeholder="Unit"
              />
            </div>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="min_qty"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                Minimum purchase quantity <em className="text-btn">*</em>
              </label>

              <input
                type="number"
                name="min_qty"
                id="min_qty"
                className="form-input w-full"
                placeholder="Minimum purchase quantity"
              />
            </div>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="tags"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                Tags <em className="text-btn">*</em>
              </label>

              <input
                type="text"
                name="tags"
                id="tags"
                className="form-input w-full"
                placeholder="Tags"
              />
            </div>
          </div>

          <div className="p-6 card">
            <h2 className="text-xl font-semibold border-b pb-2 mb-2">
              Product Images
            </h2>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="thumbnail"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                Thumbnail Image <em className="text-btn">*</em>
              </label>

              <input
                type="file"
                name="thumbnail"
                accept="image/*"
                id="thumbnail"
                className="form-input w-full border-0"
              />
            </div>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="gallery"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                Gallery Images <em className="text-btn">*</em>
              </label>

              <input
                type="file"
                name="gallery"
                accept="image/*"
                id="gallery"
                multiple
                className="form-input w-full border-0"
              />
            </div>
          </div>

          <div className="p-6 card">
            <h2 className="text-xl font-semibold border-b pb-2 mb-2">
              Product price + Tax
            </h2>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="price"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                Unit Price <em className="text-btn">*</em>
              </label>

              <input
                type="number"
                name="price"
                id="price"
                className="form-input w-full"
                placeholder="price"
              />
            </div>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="discount_date_range"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                Discount date range <em className="text-btn">*</em>
              </label>

              <input
                type="text"
                name="discount_date_range"
                id="discount_date_range"
                className="form-input w-full"
                placeholder="Choose date"
              />
            </div>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="discount"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                Discount <em className="text-btn">*</em>
              </label>

              <input
                type="text"
                name="discount"
                id="discount"
                className="form-input w-full"
                placeholder="Enter discount amount"
              />
            </div>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="discount_type"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                Discount type <em className="text-btn">*</em>
              </label>

              <select
                className="form-input w-full"
                id="discount_type"
                name="discount_type"
              >
                <option value="flat">Flat</option>
                <option value="percentage">Percentage</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 mb-4 md:flex-row">
              <label
                htmlFor="sku"
                className="flex-shrink-0 md:w-[120px] md:text-right"
              >
                SKU <em className="text-btn">*</em>
              </label>

              <input
                type="text"
                name="sku"
                id="sku"
                className="form-input w-full"
                placeholder="Enter sku"
              />
            </div>
          </div>
        </section>
        <section className="w-full md:w-2/5">
          <div className="p-6 card">
            <h2 className="text-xl font-semibold border-b pb-2 mb-2">
              Shipping configuration
            </h2>
          </div>
        </section>
      </form>
    </div>
  );
};

export default page;
